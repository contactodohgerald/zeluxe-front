import * as React from 'react';
import { type FieldError } from 'react-hook-form';
import { Error } from './error';
import { Label } from './label';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};
export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;
export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, error, children } = props;
  return (
    <div>
      <Label>
        {label}
        <div className="mb-2 mt-1 block text-sm font-medium text-gray-900 dark:text-white">
          {children}
        </div>
      </Label>
      <Error errorMessage={error?.message} />
    </div>
  );
};
