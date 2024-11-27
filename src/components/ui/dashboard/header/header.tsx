import { DropDown } from '../../dropdown/dropdown';
import NotificationIcon from '../../../../assets/images/ion_notifications-outline.svg';
import { PopOver } from '../../popover';
import { SetStateAction } from 'react';
import { HamburgerIcon } from '../../svgs/hamburger-icon';
import { CloseIconLg } from '../../svgs/close-icon-lg';
type SidebarProps = {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
};

export const Header = ({ show, setShow }: SidebarProps) => {
  return (
    <div className="container mx-auto lg:mx-0">
      <div className="flex">
        <div className="flex-grow">
          <div>
            <DropDown
              content={'Lagos, Nigeria'}
              className="h-[3.2rem] w-[12.1rem] rounded-[1.9rem] bg-white text-[11.91px] leading-[13.99px] tracking-[0.03em] text-black"
            />
          </div>
        </div>

        <div className="flex">
          <div className="relative mr-2 flex h-[3.55rem] w-[3.55rem] items-center justify-center rounded-[50%] border border-primary">
            <img src={NotificationIcon} alt="" />
            <div className="absolute left-[31.79px] top-[14.76px] h-[6.81px] w-[6.81px] rounded-full bg-danger"></div>
          </div>
          <button
            onClick={() => setShow(!show)}
            className="mr-2 cursor-pointer rounded p-2 text-secondary hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden"
          >
            <HamburgerIcon
              className={`text-seconadry w-6 lg:hidden ${show ? 'hidden' : ''}`}
            />
            <CloseIconLg className={`w-6 ${show ? '' : 'hidden'}`} />
          </button>
          <div className="ml-[1.64rem] hidden lg:block">
            <PopOver />
          </div>
        </div>
      </div>
    </div>
  );
};
