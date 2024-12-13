import * as React from 'react';
import { Active, Drafts, User } from '../types/api';
import { useUser } from './auth';

export enum ROLES {
  admin = 'admin',
  owner = 'owner',
  renter = 'renter',
}

type RoleTypes = keyof typeof ROLES;

export const POLICIES = {
  'listings:publish': (user:User, listing:Drafts) => {
    //owners can publish their own listings
    return user?.role?.name === ROLES.owner && listing?.owner_id === user?.id
  },
  'listings:approve': (user: User) => {
    //Admins can approve any listing
    return user?.role?.name === ROLES.admin;
  },
  'listings:reject':(user:User) => {
    //only admins can reject listings
    return user?.role?.name === ROLES.admin
  },
  'listings:edit' : (user:User, listing:Drafts | Active) => {
    if(user?.role?.name === ROLES.owner && listing.owner_id === user.id) {
      return true;
    }

    return false;
  }
};

export const useAuthorization = () => {
  const user = useUser();

  if (!user?.data) {
    return { checkAccess:()=> false, roll:null}
  }

  const checkAccess = React.useCallback(
    ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
      if(!allowedRoles || allowedRoles.length === 0) {
        return false;
      }
      
      return allowedRoles?.includes(user?.data?.role?.name)
    },
    [user?.data],
  );

  return { checkAccess, role: user?.data?.role?.name };
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
