import {
  Button,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import ProfileImg from '../../../assets/images/dashboard_profile.jpeg';
import AngleRightSvg from '../../../assets/svgs/dash_angle_right.svg';
import { LogoutIcon } from '../svgs/logout-icon';
import { Divider } from 'antd';

export const PopOver = () => {
  return (
    <Popover className="relative">
      <PopoverButton className="flex w-[16.94rem] items-center justify-evenly rounded-[2.1rem] pb-[0.75rem] pl-1 pr-[1.31rem] pt-[0.68rem] shadow-profile focus:outline-none">
        <div>
          <img
            src={ProfileImg}
            className="h-[31px] w-[31px] rounded-full object-center"
            alt=""
          />
        </div>
        <p className="mx-3 font-raleway text-[1.13rem] font-medium leading-[1.32rem] text-secondary">
          Femi Ademola
        </p>
        <div>
          <img src={AngleRightSvg} alt="" />
        </div>
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="mt-5 flex h-20 w-[16.94rem] flex-col rounded-lg bg-white px-3 shadow-md"
      >
        <Button className="flex items-center gap-x-4">
          <LogoutIcon />
          logout
        </Button>
        <Divider className="my-3" />
      </PopoverPanel>
    </Popover>
  );
};
