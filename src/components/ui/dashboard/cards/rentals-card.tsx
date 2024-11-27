import { Card } from 'antd';
import Image1 from '../../../../assets/images/card/list-1.jpeg';
import Image2 from '../../../../assets/images/card/lists-2.jpeg';
import Image3 from '../../../../assets/images/card/lists-3.png';
import Image4 from '../../../../assets/images/card/listings-4.png';
import { Button } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { VerifiedIcon } from '../../svgs/verified-icon';
import { TelephoneIcon } from '../../svgs/telephone-icon';

export const myListCardItems = [
  {
    id: 1,
    images: Image4,
    title: 'Maison Fahrenheit ',
    price: '212,000,000',
    location: 'Lekki lagos',
    verified_listing: 'Verified Listing',
    link: 'More Details',
    expires: 'Listing will expire in 154 days',
    name: 'Femi Ademola',
    telephone: '+234 813 482 9923',
  },
  {
    id: 2,
    images: Image2,
    title: 'Olive Gardens',
    price: '356,000,000',
    location: 'Lekki lagos',
    verified_listing: 'Verified Listing',
    link: 'More Details',
    expires: 'Listing will expire in 154 days',
    name: 'Azeke Cyprian',
    telephone: '+234 809 682 9743',
  },
  {
    id: 3,
    images: Image3,
    title: 'Creed Apartment ',
    price: '212,000,000',
    location: 'Lekki lagos',
    verified_listing: 'Verified Listing',
    link: 'More Details',
    expires: 'Listing will expire in 154 days',
    name: 'Yemi Onyeka',
    telephone: '+234 805 772 2453',
  },
  {
    id: 4,
    images: Image1,
    title: 'Creed Apartment ',
    price: '212,000,000',
    location: 'Lekki lagos',
    verified_listing: 'Verified Listing',
    link: 'More Details',
    expires: 'Listing will expire in 154 days',
    name: 'Yemi Onyeka',
    telephone: '+234 805 772 2453',
  },
];
export const RentalsCard = () => {
  return (
    <>
      {' '}
      {myListCardItems.map((item) => (
        <Card key={item.id} className="mb-[1.63rem] w-full bg-[#D9D9D92B]">
          <div
            className="flex flex-col sm:flex-row md:items-center"
            key={item.id}
          >
            <div className="mr-[1.4rem]">
              <img
                src={item.images}
                className="h-[10.3rem] w-[13.85rem] rounded-[1.41rem] object-cover"
                alt={`${item.images} Images`}
              />
            </div>
            <div className="flex-grow">
              <h4 className="mb-[0.63rem] font-raleway text-[1.5rem] font-bold leading-[1.8rem] tracking-[0.03em] text-secondary">
                {item.title}
              </h4>
              <p className="mb-[0.63rem] font-montserrat text-[1.1rem] font-semibold leading-[1.32rem] tracking-[0.03em] text-primary">
                ₦{item.price}
                <span className="font-montserrat text-[0.5rem] font-medium leading-[0.8rem] tracking-[0.03em] text-secondary">
                  /Per Annum
                </span>
              </p>
              <Button className="mb-[0.58rem] rounded-[1.2rem] bg-primary p-[0.6rem] font-raleway text-[0.63rem] font-medium leading-[0.74rem] tracking-[0.03em] text-white backdrop-blur-[10.09px] backdrop-filter">
                {item.location}
              </Button>
              <p className="mb-[0.63rem] font-raleway text-[0.55rem] font-bold leading-[0.65rem] tracking-[0.03em] text-black">
                {item.verified_listing}
              </p>
              <Link
                to="#"
                className="flex items-center font-raleway text-[0.4rem] font-[400] leading-[0.46rem] tracking-[0.03em] text-primary hover:text-primary hover:underline"
              >
                {item.link} <VerifiedIcon className="ml-2" />
              </Link>
            </div>
            <div className="mt-3 flex flex-col justify-end md:mt-32">
              <div className="mb-[0.6rem]">
                <p className="font-raleway text-[0.73rem] font-[400] leading-[0.63rem] tracking-[0.03em] text-secondary">
                  {item.name}
                </p>
              </div>
              <div className="mb-[0.6rem]">
                <p className="flex items-center text-nowrap font-raleway text-[0.73rem] font-[400] leading-[0.63rem] tracking-[0.03em] text-secondary">
                  <TelephoneIcon className="mr-2" />{' '}
                  <span>{item.telephone} </span>
                </p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
