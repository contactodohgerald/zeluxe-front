import Logo from '../../../assets/images/logo.png';
import { Link } from '../link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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

export const Footer = () => (
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
            { label: 'Register', to: '#!' },
            { label: 'Login', to: '#!' },
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
            text="6921A road Gwarimpa, Abuja Nigeria."
            link={'#'}
          />
          <ContactInfo
            icon={icons.envelope}
            text="support@zeluxe.ng"
            link="mailto:support@zeluxe.ng"
          />
          <ContactInfo icon={icons.phone} text="+234 704 800 3405" link="#" />
        </div>
      </div>
    </div>
    {/* Social Media Links */}
    <div className="border-t border-gray-200 py-3">
      <div className="flex justify-center space-x-4 p-2">
        {socialIcons.map((icon) => (
          <Link key={icon} to="#" className="text-gray-600 hover:text-gray-800">
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

// // @ts-ignore
//  const HomeIcon = "fas fa-home";
//  const EnvelopeIcon  = "fas fa-envelope";
//  const PhoneIcon  = "fas fa-phone-alt";
//  const FacebookIcon  = "fab fa-facebook";
//  const TwitterIcon  = "fab fa-twitter";
//  const GoogleIcon  = "fab fa-google";
//  const InstagramIcon  = "fab fa-instagram";
//  const LinkedinIcon  = "fab fa-linkedin";
//  const GithubIcon  = "fab fa-github";

// export const Footer = () => {
//   return (
//     <footer className="text-center lg:text-start bg-body-tertiary text-muted custom-footer">
//       <div className="container px-[15px] text-center mx-auto md:text-start mt-2">
//         <div className="flex flex-wrap -mr-[15px] -ml-[15px] mt-3">
//           {/* Logo and Description  */}
//           <div className="col-md-3 col-lg-4 col-xl-3 mb-4 mx-auto text-center">
//             <img src={Logo} alt="Logo" className="mb-4 h-10 mx-auto" />
//             <p className="text-grey-5">
//               Our goal is to offer a home away from home experience, with the
//               convenience of hotel-like services such as housekeeping, laundry,
//               and sometimes even concierge assistance.
//             </p>
//           </div>
//           {/* Products  */}
//           <div className="col-md-2 col-lg-2 col-xl-2 mb-4 mx-auto text-center">
//             <h6 className="uppercase mb-4 text-[#008000]">Products</h6>
//             <p className="mt-0 mb-4">
//               <Link to="#!">Apartments</Link>
//             </p>
//             <p className="mt-0 mb-4">
//               <Link to="#!">Register</Link>
//             </p>
//             <p className="mt-0 mb-4">
//               <Link to="#!">Login</Link>
//             </p>
//           </div>
//           {/* Useful Links  */}
//           <div className="col-md-3 col-lg-2 col-xl-2 mb-4 mx-auto text-center">
//             <h6 className="uppercase mb-4" style={{ color: 'green' }}>
//               Useful Links
//             </h6>
//             <p className="mt-0 mb-4">
//               <Link to="/terms" className="text-gray-600 hover:text-gray-800">
//                 Terms
//               </Link>
//             </p>
//             <p className="mt-0 mb-4">
//               <Link to="/privacy" className="text-gray-600 hover:text-gray-800">
//                 Privacy
//               </Link>
//             </p>
//           </div>
//           {/* Contact */}
//           <div className="col-md-4 col-lg-3 col-xl-3 mb-4 mx-auto text-center">
//             <h6 className="uppercase mb-4" style={{ color: 'green' }}>
//               Contact
//             </h6>
//             <p className="text-grey-5">
//             <FontAwesomeIcon icon={HomeIcon as IconProp}/><span className='ml-2'>6921A road Gwarimpa, Abuja Nigeria.</span>
//             </p>
//             <p>
//               <Link
//                 to="mailto:support@zeluxe.ng"
//               >
//                 <FontAwesomeIcon icon={EnvelopeIcon as IconProp}/><span className='ml-2 text-grey-6'>support@zeluxe.ng</span>
//               </Link>
//             </p>
//             <p className="text-grey-5">
//             <FontAwesomeIcon icon={PhoneIcon as IconProp }/><span className='ml-2'>+234 704 800 3405</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-200 py-3">
//         <div className="flex justify-center space-x-4 p-2">
//           <Link to="#" className="text-gray-600 hover:text-gray-800">
//             <FontAwesomeIcon icon={FacebookIcon as IconProp}/>
//           </Link>
//           <Link to="#" className="text-gray-600 hover:text-gray-800">
//             <FontAwesomeIcon icon={TwitterIcon as IconProp}/>
//           </Link>
//           <Link to="#" className="text-gray-600 hover:text-gray-800">
//             <FontAwesomeIcon icon={GoogleIcon as IconProp}/>
//           </Link>
//           <Link to="#" className="text-gray-600 hover:text-gray-800">
//             <FontAwesomeIcon icon={InstagramIcon as IconProp}/>
//           </Link>
//           <Link to="#" className="text-gray-600 hover:text-gray-800">
//             <FontAwesomeIcon icon={LinkedinIcon as IconProp}/>
//           </Link>
//           <Link to="#" className="text-gray-600 hover:text-gray-800">
//             <FontAwesomeIcon icon={GithubIcon as IconProp}/>
//           </Link>
//         </div>
//       </div>

//       <div className="container mx-auto text-center mt-2">
//         <p className="text-grey-5">
//           &copy; 2024 | Zeltech Innovations Ltd, All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };
