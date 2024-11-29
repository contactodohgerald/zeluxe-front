import * as React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';
import { cn } from '@/utils/cn';
import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    registration?: Partial<UseFormRegisterReturn>;
  };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, registration, ...props }, ref) => {
    return (
      <FieldWrapper label={label} error={error}>
        <input
          type={type}
          className={cn(
            'block w-full rounded-lg border border-gray-300 bg-gray-50 bg-transparent p-2.5 text-sm text-secondary outline-none focus:border-primary focus:ring-primary',
            className,
          )}
          ref={ref}
          {...registration}
          {...props}
        />
      </FieldWrapper>
    );
  },
);

Input.displayName = 'Input';
