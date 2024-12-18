import {
  Button,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import AvatarImg from '@/assets/images/user_avatar.jpg';
import AngleRightSvg from '../../../assets/svgs/dash_angle_right.svg';
import { LogoutIcon } from '../svgs/logout-icon';
import { Divider } from 'antd';
import { useNotifications } from '../notifications';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '@/lib/auth';
import { paths } from '@/config/paths';
import { formatErrors } from '@/lib/utils';
import { useUserStore } from '@/store/user-store';

export const PopOver = ({ content }: { content: string }) => {
  const { addNotification } = useNotifications();
  const { setIsAuthenticated } = useUserStore();
  const navigate = useNavigate();
  const logout = useLogout({
    onSuccess() {
      setIsAuthenticated(false);
      addNotification({
        type: 'success',
        title: 'success',
        message: 'Logout Successfully',
      });
      navigate(paths.auth.login.getHref(), {
        replace: true,
      });
    },
    onError(error) {
      const formError = formatErrors(error);
      addNotification({
        type: 'error',
        title: 'Failure',
        message: formError,
      });
    },
  });
  return (
    <Popover className="relative">
      <PopoverButton className="flex w-[16.94rem] items-center justify-evenly rounded-[2.1rem] pb-[0.75rem] pl-1 pr-[1.31rem] pt-[0.68rem] shadow-profile focus:outline-none">
        <div>
          <img
            src={AvatarImg}
            className="h-[31px] w-[31px] rounded-full object-center"
            alt=""
          />
        </div>
        <p className="mx-3 font-raleway text-[1.13rem] font-medium leading-[1.32rem] text-secondary">
          {content}
        </p>
        <div>
          <img src={AngleRightSvg} alt="" />
        </div>
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="mt-5 flex h-20 w-[16.94rem] flex-col rounded-lg bg-white px-3 shadow-md"
      >
        <Button
          className="flex items-center gap-x-4"
          onClick={() => logout.mutate()}
        >
          <LogoutIcon />
          logout
        </Button>
        <Divider className="my-3" />
      </PopoverPanel>
    </Popover>
  );
};
