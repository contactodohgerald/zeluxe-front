import Logo from '../../../assets/images/logo.png';
import { Link } from '../link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { paths } from '@/config/paths';
import { useSettings } from '@/features/settings/api/get-settings';
import { Spinner } from '../spinner';

const icons = {
  home: 'fas fa-home',
  envelope: 'fas fa-envelope',
  phone: 'fas fa-phone-alt',
  facebook: 'fab fa-facebook',
  twitter: 'fab fa-twitter',
  google: 'fab fa-google',
  instagram: 'fab fa-instagram',
  linkedin: 'fab fa-linkedin',
  github: 'fab fa-github',
};

const socialIcons = [
  'facebook',
  'twitter',
  'google',
  'instagram',
  'linkedin',
  'github',
];

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) => (
  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
    <h6 className="mb-4 uppercase text-[#008000]">{title}</h6>
    {links.map(({ label, to }: { label: string; to: string }) => (
      <p key={label} className="mb-4 mt-0">
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

  if (settingQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <footer className="bg-body-tertiary custom-footer text-center text-muted lg:text-start">
      <div className="container mx-auto mt-2 px-[15px] text-center md:text-start">
        <div className="-mx-3 mt-3 flex flex-wrap">
          {/* Logo and Description */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
            <img src={Logo} alt="Logo" className="mx-auto mb-4 h-10" />
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
              { label: 'Register', to: paths.auth.register.getHref() },
              { label: 'Login', to: paths.auth.login.getHref() },
            ]}
          />
          {/* Useful Links Section */}
          <FooterSection
            title="Useful Links"
            links={[
              { label: 'Terms', to: '/terms' },
              { label: 'Privacy', to: '/privacy' },
            ]}
          />
          {/* Contact Section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4 text-center">
            <h6 className="mb-4 uppercase" style={{ color: 'green' }}>
              Contact
            </h6>
            <ContactInfo
              icon={icons.home}
              text={`${settings?.address}`}
              link={'#'}
            />
            <ContactInfo
              icon={icons.envelope}
              // text="support@zeluxe.ng"
              text={`${settings?.site_email}`}
              link={`mailto:${settings?.support_email}`}
            />
            <ContactInfo
              icon={icons.phone}
              text={`${settings?.site_phone}`}
              link="#"
            />
          </div>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="border-t border-gray-200 py-3">
        <div className="flex justify-center space-x-4 p-2">
          {socialIcons.map((icon) => (
            <Link
              key={icon}
              to="#"
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon
                icon={icons[icon as keyof typeof icons] as IconProp}
              />
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
