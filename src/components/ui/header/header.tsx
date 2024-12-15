import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import { paths } from '../../../config/paths';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useUserStore } from '@/store/user-store';
import { useLogout } from '@/lib/auth';
import { useNotifications } from '../notifications';

const PlusIcon = 'fa fa-plus-circle';
const linkItems = [
  {
    text: 'Home',
    path: paths.home.getHref(),
  },
  {
    text: 'About Us',
    path: paths.about.getHref(),
  },
  {
    text: 'Contact Us',
    path: paths.contact.getHref(),
  },
];
export const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useUserStore();
  const { addNotification } = useNotifications();
  const navigate = useNavigate();

  const logout = useLogout({
    onSuccess() {
      addNotification({
        type: 'success',
        title: 'success',
        message: 'Logout successfully',
      });
      navigate(paths.auth.login.getHref());
    },
  });
  return (
    <>
      <header>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <nav className="navigation relative flex w-full flex-wrap items-center justify-between px-4 py-[0.5rem]">
              <Link className="flex-shrink-0" to={paths.home.getHref()}>
                <img src={Logo} alt="zeluxe homes" className="h-10" />
              </Link>
              <button
                onClick={() => setShow(!show)}
                type="button"
                className="inline-flex h-10 w-14 items-center justify-center rounded-lg border p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div className="hidden md:items-center lg:flex lg:flex-grow">
                <ul className="flex flex-col lg:ml-auto lg:flex-row">
                  <li className="nav-item">
                    {linkItems.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.path}
                        className={`${activeIndex === idx ? 'text-link' : 'text-[#00000080] hover:text-grey-6'} cursor-pointer px-4 py-2 transition-colors`}
                        onClick={() => setActiveIndex(idx)}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </li>
                </ul>
                <ul className="flex flex-col lg:ml-auto lg:flex-row">
                  {!isAuthenticated ? (
                    <li className="nav-item">
                      <Link
                        className="nav-link login-button"
                        to={paths.auth.login.getHref()}
                      >
                        Portal Login
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        className="nav-link login-button"
                        to={'#'}
                        onClick={() => {
                          setIsAuthenticated(false);
                          logout.mutate();
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <Link
                      className="nav-link add-button text-white"
                      to={paths.app.addListings.getHref()}
                    >
                      <FontAwesomeIcon icon={PlusIcon as IconProp} />{' '}
                      <span className="ml-2">Add Listing</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`container mx-auto p-8 transition-transform duration-300 ease-in-out lg:hidden ${show ? 'block translate-y-0 opacity-100' : 'hidden -translate-y-full opacity-0'}`}
      >
        <ul className="flex flex-col space-y-2">
          <li className="flex flex-col">
            {linkItems.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`${activeIndex === idx ? 'text-link' : 'text-[#00000080] hover:text-grey-6'} cursor-pointer px-4 py-2 transition-colors`}
                onClick={() => setActiveIndex(idx)}
              >
                {link.text}
              </Link>
            ))}
          </li>
        </ul>
        <ul className="flex flex-col space-y-2 md:ml-auto md:flex-row">
          {/* {!isAuthenticated && (
            <li className="">
              <Link
                className="nav-link login-button w-[200px]"
                to={paths.auth.login.getHref()}
              >
                Portal Login
              </Link>
            </li>
          )} */}
          {!isAuthenticated ? (
            <li className="mt-[6px]">
              <Link
                className="nav-link login-button w-[200px]"
                to={paths.auth.login.getHref()}
              >
                Portal Login
              </Link>
            </li>
          ) : (
            <li className="">
              <Link
                className="nav-link login-button w-[200px]"
                to={'#'}
                onClick={() => {
                  setIsAuthenticated(false);
                  logout.mutate();
                }}
              >
                Logout
              </Link>
            </li>
          )}
          <li className="">
            <Link
              className="nav-link add-button w-[200px] text-white"
              to={paths.app.addListings.getHref()}
            >
              <FontAwesomeIcon icon={PlusIcon as IconProp} />{' '}
              <span className="ml-2">Add Listing</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu End */}
    </>
  );
};
