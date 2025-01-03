import Gallery1 from '@/assets/images/description/house2.jpg';
import Gallery2 from '@/assets/images/about/gallery-2.jpg';
import Gallery3 from '@/assets/images/about/gallery-3.jpg';
import Gallery4 from '@/assets/images/about/gallery-4.jpg';
import Gallery5 from '@/assets/images/about/gallery-5.jpg';
import Gallery6 from '@/assets/images/about/gallery-6.jpg';
import Home10 from '@/assets/images/featured_properties/home10.jpg';
import Home9 from '@/assets/images/featured_properties/home9.jpg';
import Home7 from '@/assets/images/featured_properties/home7.jpg';
import {
  faBreadSlice,
  faBuilding,
  faHotel,
} from '@fortawesome/free-solid-svg-icons';
export const currencyNGN = '₦';
export const icons = {
  Apartment: faBuilding,
  'Bed and Breakfast': faBreadSlice,
  Bungalow: faHotel,
};
export const bookingLinks = ['Bookings', 'Apartments', 'Easy Payment'];

export const apartments = [
  {
    id: 1,
    img: Home9,
    title: '4 Bedroom Apartment',
    location: '6th Ave, Gwarinpa',
    amenities: 'Good Road . 24/7 light . Serenity . Security',
    price: '₦30,000 / day',
  },
  {
    id: 2,
    img: Home7,
    title: '2 Bedroom Apartment',
    location: 'Aco Estate, Lugbe',
    amenities: 'Good Road . 24/7 light . Serenity . Security',
    price: '₦100,000 / day',
  },
  {
    id: 3,
    img: Home10,
    title: '3 Bedroom Apartment',
    location: 'Phase 4, Nosco Road Kubwa',
    amenities: 'Good Road . 24/7 light . Serenity . Security',
    price: '₦45,000 / day',
  },
  {
    id: 4,
    img: Home9,
    title: '4 Bedroom Apartment',
    location: '6th Ave, Gwarinpa',
    amenities: 'Good Road . 24/7 light . Serenity . Security',
    price: '₦30,000 / day',
  },
  {
    id: 5,
    img: Home7,
    title: '2 Bedroom Apartment',
    location: 'Aco Estate, Lugbe',
    amenities: 'Good Road . 24/7 light . Serenity . Security',
    price: '₦100,000 / day',
  },
  {
    id: 6,
    img: Home10,
    title: '3 Bedroom Apartment',
    location: 'Phase 4, Nosco Road Kubwa',
    amenities: 'Good Road . 24/7 light . Serenity . Security',
    price: '₦45,000 / day',
  },
];

export const cityLinks = [
  'Abuja',
  'Lagos',
  'Owerri',
  'Asaba',
  'Enugu',
  'Benin',
  'Portharcourt',
  'Calabar',
  'Kano',
  'Makurdi',
  'Akwa',
];

export const features = [
  {
    icon: 'bi bi-house-door-fill',
    title: 'Quality properties',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste',
  },
  {
    icon: 'bi bi-person-fill',
    title: 'Top rated agents',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.',
  },
  {
    icon: 'bi bi-shield-fill',
    title: 'Easy and safe',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.',
  },
];

export const counters = [
  { count: 0, label: 'of Buy Properties', delay: 300 },
  { count: 200, label: 'of Sell Properties', delay: 400 },
  { count: 3000, label: 'of All Properties', delay: 500 },
  { count: 2300, label: 'of Agents', delay: 600 },
];

export const testimonials = [
  {
    image: Gallery1,
    name: 'Roger Scott',
    position: 'Marketing Manager',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: Gallery2,
    name: 'Jane Doe',
    position: 'Product Manager',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: Gallery3,
    name: 'John Smith',
    position: 'CEO',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    image: Gallery4,
    name: 'Emily Davis',
    position: 'Designer',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
];

export const listItems = [
  {
    id: 1,
    content: 'Outstanding customer service',
    icon: 'bi bi-check-circle-fill',
  },
  {
    id: 2,
    content: 'Unmatched market knowledge',
    icon: 'bi bi-check-circle-fill',
  },
  {
    id: 3,
    content: 'Comprehensive property listings',
    icon: 'bi bi-check-circle-fill',
  },
  {
    id: 4,
    content: 'Dedicated and professional agents',
    icon: 'bi bi-check-circle-fill',
  },
  {
    id: 5,
    content: 'Proven track record of success',
    icon: 'bi bi-check-circle-fill',
  },
  {
    id: 6,
    content: 'Commitment to client satisfaction',
    icon: 'bi bi-check-circle-fill',
  },
];

export const galleryImages = [
  { id: 1, imageUrl: Gallery1 },
  { id: 2, imageUrl: Gallery2 },
  { id: 3, imageUrl: Gallery3 },
  { id: 4, imageUrl: Gallery4 },
  { id: 5, imageUrl: Gallery5 },
  { id: 6, imageUrl: Gallery6 },
];

// hourly,daily,weekly,monthly,yearly
export const cycleItems = [
  {
    value: 'hourly',
    label: 'hourly',
  },
  {
    value: 'daily',
    label: 'daily',
  },
  {
    value: 'weekly',
    label: 'weekly',
  },
  {
    value: 'monthly',
    label: 'monthly',
  },
  {
    value: 'yearly',
    label: 'yearly',
  },
];

//rent,sale,lease
export const listingTypes = [
  { label: 'rent', value: 'rent' },
  { label: 'sale', value: 'sale' },
  { label: 'lease', value: 'lease' },
];
export const genderTypes = [
  { label: 'male', value: 'male' },
  { label: 'female', value: 'female' },
];

export const categoryItems = [
  'All',
  'Apartment',
  'Bed and Breakfast',
  'Bungalow',
  'Cabin',
  'Castle',
  'Chalet',
  'Condo',
  'Cottage',
  'Dome',
  'Farmhouse',
  'Guesthouse',
  'Hostel',
  'Houseboat',
  'Loft',
  'Mansion',
  'Penthouse',
  'Resort',
  'Riad',
  'Serviced Apartment',
  'Studio',
  'Tent',
  'Tiny House',
  'Townhouse',
  'Treehouse',
  'Vacation Home',
  'Villa',
  'Yurt',
];

export const footerIcons = {
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

// export const socialIcons = [
//   'facebook',
//   'twitter',
//   'google',
//   'instagram',
//   'linkedin',
//   'github',
// ];

export const socialicons = [
  {
    name: 'fab fa-facebook',
    link: 'https://www.facebook.com/share/1DuyQ8EvPt/?mibextid=wwXIfr',
  },
  {
    name: 'fab fa-twitter',
    link: 'https://twitter.com/zeltechng',
  },
  {
    name: 'fab fa-google',
    link: '#',
  },
  {
    name: 'fab fa-instagram',
    link: '#',
  },
  {
    name: 'fab fa-linkedin',
    link: '#',
  },
  {
    name: 'fab fa-github',
    link: '#',
  },
];
