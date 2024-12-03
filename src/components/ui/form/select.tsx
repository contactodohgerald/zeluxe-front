import { UseFormRegisterReturn } from 'react-hook-form';
import { cn } from '@/utils/cn';
import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper';
import { nanoid } from 'nanoid';
type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const Select = (props: SelectFieldProps) => {
  const { label, options, error, className, defaultValue, registration } =
    props;

  return (
    <FieldWrapper label={label} error={error}>
      <select
        className={cn(
          'block w-full rounded-lg border border-gray-300 bg-gray-50 bg-transparent p-2.5 text-sm text-secondary outline-none focus:border-primary focus:ring-primary',
          className,
        )}
        defaultValue={defaultValue}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={nanoid()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};
