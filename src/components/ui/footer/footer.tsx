import { Link } from '../link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { paths } from '@/config/paths';
import { useSettings } from '@/features/settings/api/get-settings';
import { Spinner } from '../spinner';
import { useUserStore } from '@/store/user-store';
import { footerIcons, socialicons } from '@/utils/constants';

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) => (
  <div className="mx-auto mb-4 text-center col-md-2 col-lg-2 col-xl-2">
    <h6 className="mb-4 uppercase text-[#008000]">{title}</h6>
    {links.map(({ label, to }: { label: string; to: string }) => (
      <p key={label} className="mt-0 mb-4">
        <Link to={to}>{label}</Link>
      </p>
    ))}
  </div>
);

const ContactInfo = ({
  icon,
  text,
  link,
}: {
  icon: string;
  text: string;
  link: string;
}) => (
  <p className="text-grey-5">
    {link ? (
      <Link to={link}>
        <FontAwesomeIcon icon={icon as IconProp} />
        <span className="ml-2">{text}</span>
      </Link>
    ) : (
      <>
        <FontAwesomeIcon icon={icon as IconProp} />
        <span className="ml-2">{text}</span>
      </>
    )}
  </p>
);

export const Footer = () => {
  const settingQuery = useSettings();
  const settings = settingQuery?.data?.data;
  const { isAuthenticated } = useUserStore();

  if (settingQuery.isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-48">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <footer className="text-center bg-body-tertiary custom-footer text-muted lg:text-start">
      <div className="container mx-auto mt-2 px-[15px] text-center md:text-start">
        <div className="flex flex-wrap mt-3 -mx-3">
          {/* Logo and Description */}
          <div className="mx-auto mb-4 text-center col-md-3 col-lg-4 col-xl-3">
            <img
              src={settings?.site_logo}
              alt="Logo"
              className="h-10 mx-auto mb-4"
            />
            <p className="text-grey-5">
              Our goal is to offer a home away from home experience, with the
              convenience of hotel-like services.
            </p>
          </div>
          {/* Products Section */}
          <FooterSection
            title="Products"
            links={[
              { label: 'Apartments', to: '#!' },
              ...(isAuthenticated
                ? []
                : [
                    {
                      label: 'Register',
                      to: paths.auth.chooseAccount.getHref(),
                    },
                    { label: 'Login', to: paths.auth.login.getHref() },
                  ]),
            ]}
          />
          {/* Useful Links Section */}
          <FooterSection
            title="Useful Links"
            links={[
              { label: 'Terms', to: paths.terms.getHref() },
              { label: 'Privacy', to: paths.privacy.getHref() },
            ]}
          />
          {/* Contact Section */}
          <div className="mx-auto mb-4 text-center col-md-4 col-lg-3 col-xl-3">
            <h6 className="mb-4 uppercase" style={{ color: 'green' }}>
              Contact
            </h6>
            <ContactInfo
              icon={footerIcons.home}
              text={`${settings?.address}`}
              link={'#'}
            />
            <ContactInfo
              icon={footerIcons.envelope}
              // text="support@zeluxe.ng"
              text={`${settings?.site_email}`}
              link={`mailto:${settings?.support_email}`}
            />
            <ContactInfo
              icon={footerIcons.phone}
              text={`${settings?.site_phone}`}
              link="#"
            />
          </div>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="py-3 border-t border-gray-200">
        <div className="flex justify-center p-2 space-x-4">
          {socialicons.map((icon) => (
            <Link
              target="_blank"
              key={icon.name}
              to={icon.link}
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={icon.name as IconProp} />
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="container mx-auto mt-2 text-center">
        <p className="text-grey-5">
          &copy; 2024 | Zeltech Innovations Ltd, All rights reserved.
        </p>
      </div>
    </footer>
  );
};
