import { Link, NavLink, useNavigate } from 'react-router-dom';
import { paths } from '@/config/paths';
import LogoImg from '@/assets/images/logo.png';
import ProfileImg from '@/assets/images/dashboard_profile.jpeg';
import { cn } from '@/utils/cn';
import {
  DashBoardIcon,
  ListingsIcon,
  MyListingsIcon,
  RentalsIcon,
  ReviewsIcon,
  SettingsIcon,
} from '../../svgs';
import { LogoutIcon } from '../../svgs/logout-icon';
import React from 'react';
import { useLogout, useUser } from '@/lib/auth';
import { useNotifications } from '../../notifications';
import { useUserStore } from '@/store/user-store';

type SideNavigationItem = {
  id: number;
  name: string;
  to: string;
  icon: ((props: React.SVGProps<SVGSVGElement>) => JSX.Element) | string;
};
const Logo = () => {
  return (
    <Link className="" to={paths.app.dashboard.getHref()}>
      <img src={LogoImg} alt="Logo Image" />
    </Link>
  );
};

const mainNavItems = [
  {
    id: 1,
    name: 'Dashboard',
    // icon: LayoutDashboardIcon,
    icon: DashBoardIcon,
    to: paths.app.dashboard.getHref(),
  },
  {
    id: 2,
    name: 'Add Listings',
    icon: ListingsIcon,
    to: paths.app.addListings.getHref(),
  },
  {
    id: 3,
    name: 'My Listings',
    icon: MyListingsIcon,
    to: paths.app.myListings.getHref(),
  },
  {
    id: 4,
    name: 'Rentals',
    icon: RentalsIcon,
    to: paths.app.rentals.getHref(),
  },
  {
    id: 5,
    name: 'My Bookings',
    icon: RentalsIcon,
    to: paths.app.bookings.getHref(),
  },
  {
    id: 6,
    name: 'Reviews',
    icon: ReviewsIcon,
    to: paths.app.reviews.getHref(),
  },
  {
    id: 7,
    name: 'Settings',
    icon: SettingsIcon,
    to: paths.app.settings.getHref(),
  },
].filter(Boolean) as SideNavigationItem[];

type SidebarProps = {
  show: boolean;
  // setShow: React.Dispatch<SetStateAction<boolean>>;
};

export const Sidebar = ({ show }: SidebarProps) => {
  const { setIsAuthenticated } = useUserStore();
  const { addNotification } = useNotifications();
  const navigate = useNavigate();
  const logout = useLogout({
    onSuccess() {
      addNotification({
        type: 'success',
        title: 'success',
        message: 'Logout Successfully',
      });
      navigate(paths.auth.login.getHref(), {
        replace: true,
      });
    },
  });
  const user = useUser();
  const bottomNavItems = [
    {
      id: 7,
      name: `${user?.data?.first_name}`,
      icon: ProfileImg,
      to: paths.app.profile.getHref(),
    },
    {
      id: 8,
      name: 'Log out',
      icon: LogoutIcon,
      to: '#',
    },
  ];

  return (
    <aside
      className={cn(
        'fixed z-[2] min-h-screen flex-col overflow-y-auto bg-white pl-[2.5rem] pr-[1.5rem] shadow-dark md:w-[12.13rem]',
        `${show ? 'flex translate-x-0' : 'hidden -translate-x-[100%]'}`,
        'transition-transform duration-300 lg:flex lg:translate-x-0',
      )}
    >
      <nav className="flex h-screen flex-col justify-between">
        <div>
          <div className="pb-[1.7rem] pt-[4.88rem]">
            <Logo />
          </div>
          <ul>
            {mainNavItems.map((item) => (
              <NavLink
                end
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'mb-[1.4rem] flex h-[30.53px] w-[8.1rem] items-center text-nowrap px-[0.6rem] font-raleway text-[0.735rem] font-bold leading-[0.864rem] text-secondary',
                    '',
                    isActive && 'rounded-[8.1px] bg-primary text-white',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={cn(
                        'size-4 shrink-0',
                        isActive ? 'text-white' : 'text-secondary',
                      )}
                    />
                    <span className="ml-2">{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
        <ul className="">
          {bottomNavItems.map((item) => {
            if (item.name === 'Log out') {
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsAuthenticated(false);
                    logout.mutate();
                  }}
                  className="mb-[0.5rem] flex h-[2.7rem] w-[8rem] items-center text-nowrap rounded-[1.5rem] px-[0.6rem] font-raleway text-[0.644rem] font-[400] leading-[0.76rem] text-secondary"
                >
                  {typeof item.icon === 'string' ? (
                    <img
                      src={item.icon}
                      alt={`${item.icon} icon`}
                      className="h-[2.13rem] w-[2.13rem] shrink-0 rounded-full object-center"
                    />
                  ) : (
                    <item.icon className="size-4 shrink-0 text-secondary" />
                  )}
                  <span className="ml-2">{item.name}</span>
                </button>
              );
            }

            return (
              <NavLink
                end
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'mb-[0.5rem] flex h-[2.7rem] w-[8rem] items-center text-nowrap px-[0.6rem] font-raleway text-[0.644rem] font-[400] leading-[0.76rem] text-secondary',
                    isActive ? 'rounded-[1.5rem] bg-primary text-white' : '',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {typeof item.icon === 'string' ? (
                      <img
                        src={item.icon}
                        alt={`${item.icon} icon`}
                        className="h-[2.13rem] w-[2.13rem] shrink-0 rounded-full object-center"
                      />
                    ) : (
                      <item.icon
                        className={cn(
                          'size-4 shrink-0',
                          isActive ? 'text-white' : 'text-secondary',
                        )}
                      />
                    )}
                    <span className="ml-2">{item.name}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
