import LocationIcon from '../../../assets/images/location.svg';
import { useState } from 'react';
import { Button } from '@headlessui/react';
import { cn } from '@/utils/cn';
import { DropdownSvg } from '../svgs/drop-down';

interface DropdowProps {
  content: React.ReactNode;
  className?: string;
}

export const DropDown = ({ content, className = '' }: DropdowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(() => !isOpen);
  };
  return (
    <div className={`relative ${className}`}>
      <Button
        onClick={toggleDropdown}
        className={cn(
          `, inline-flex items-center gap-x-2 px-4 text-center font-raleway text-sm font-medium shadow-profile focus:outline-none focus:ring-1 focus:ring-primary ${className}`,
        )}
      >
        <div>
          <img src={LocationIcon} alt="location" className="mr-2" />
        </div>
        <p className="mr-4 font-raleway text-[11.91px] font-medium leading-[13.99px] tracking-[0.03em] text-black">
          {content}
        </p>
        <DropdownSvg />
      </Button>
    </div>
  );
};
