import * as React from 'react';
import { Review, User } from '../types/api';
import { useUser } from './auth';

export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

type RoleTypes = keyof typeof ROLES;

export const POLICIES = {
  'review:delete': (user: User, review: Review) => {
    if (user.role_id === 'ADMIN') {
      return true;
    }

    if (user.role_id === 'USER' && review.author?.id === user.id) {
      return true;
    }

    return false;
  },
};

export const useAuthorization = () => {
  const user = useUser();

  if (!user.data) {
    throw Error('User does not exist');
  }

  const checkAccess = React.useCallback(
    ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
      if (allowedRoles && allowedRoles.length > 0 && user.data) {
        return allowedRoles?.includes(user.data.role_id);
      }

      return true;
    },
    [user.data],
  );

  return { checkAccess, role: user.data.role };
};

type AuthorizationProps = {
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
} & (
  | {
      allowedRoles: RoleTypes[];
      policyCheck?: never;
    }
  | {
      allowedRoles?: never;
      policyCheck: boolean;
    }
);

export const Authorization = ({
  policyCheck,
  allowedRoles,
  forbiddenFallback = null,
  children,
}: AuthorizationProps) => {
  const { checkAccess } = useAuthorization();

  let canAccess = false;

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles });
  }

  if (typeof policyCheck != 'undefined') {
    canAccess = policyCheck;
  }

  return <>{canAccess ? children : forbiddenFallback}</>;
};
