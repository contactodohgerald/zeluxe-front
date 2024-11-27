import { Card } from 'antd';
import Image1 from '../../../../../assets/images/card/list-1.jpeg';
import Image2 from '../../../../../assets/images/card/lists-2.jpeg';
import Image3 from '../../../../../assets/images/card/lists-3.png';
import Image4 from '../../../../../assets/images/card/listings-4.png';
import { Button } from '@headlessui/react';
import { CarbonCloseFilledIcon } from '@/components/ui/svgs/close-icon';
import { IcBaselineDelete } from '@/components/ui/svgs/delete-icon';
import { EditIcon } from '@/components/ui/svgs/edit-icon';

export const myListCardItems = [
  {
    id: 1,
    images: Image4,
    title: 'Maison Fahrenheit ',
    price: '212,000,000',
    location: 'Lekki lagos',
    reviews: 28,
    contact: 4,
    expires: 'Listing will expire in 154 days',
  },
  {
    id: 2,
    images: Image2,
    title: 'Olive Gardens',
    price: '356,000,000',
    location: 'Lekki lagos',
    reviews: 12,
    contact: 2,
    expires: 'Listing will expire in 154 days',
  },
  {
    id: 3,
    images: Image3,
    title: 'Creed Apartment ',
    price: '212,000,000',
    location: 'Lekki lagos',
    reviews: 28,
    contact: 4,
    expires: 'Listing will expire in 154 days',
  },
  {
    id: 4,
    images: Image1,
    title: 'Creed Apartment ',
    price: '212,000,000',
    location: 'Lekki lagos',
    reviews: 28,
    contact: 4,
    expires: 'Listing will expire in 154 days',
  },
];
export const MyListingsTabCard = () => {
  return (
    <>
      {' '}
      {myListCardItems.map((item) => (
        <Card className="mb-[1.63rem] w-full bg-[#D9D9D92B]">
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
              <p className="font-raleway text-[1.02rem] font-[400] leading-[2.2rem] -tracking-[0.02em] text-[#0000007A]">
                {item.expires}
              </p>
            </div>
            <div className="flex-grow">
              <h4 className="mb-[0.63rem] font-raleway text-[1.5rem] font-bold leading-[1.8rem] tracking-[0.03em] text-secondary">
                {item.title}
              </h4>
              <p className="mb-[0.63rem] font-montserrat text-[1.1rem] font-semibold leading-[1.32rem] tracking-[0.03em] text-primary">
                ₦{item.price}
              </p>
              <Button className="mb-[0.58rem] rounded-[0.63rem] bg-primary p-[0.6rem] font-raleway text-[0.63rem] font-medium leading-[0.74rem] tracking-[0.03em] text-white backdrop-blur-[10.09px] backdrop-filter">
                {item.location}
              </Button>
              <p className="mb-[0.63rem] font-raleway text-[0.87rem] font-[400] leading-[1.02rem] tracking-[0.03em] text-black">
                {item.reviews} reviews
              </p>
              <p className="font-raleway text-[0.87rem] font-[400] leading-[1.02rem] tracking-[0.03em] text-black">
                {item.contact} contact
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-[0.6rem]">
                <Button className="flex items-center text-danger-5">
                  <IcBaselineDelete />
                  <span className="ml-1 font-raleway text-[0.73rem] font-[400] leading-[0.85rem] tracking-[0.03em]">
                    Delete
                  </span>
                </Button>
              </div>
              <div className="mb-[0.6rem]">
                <Button className="flex items-center text-warning">
                  <EditIcon />
                  <span className="ml-1 font-raleway text-[0.73rem] font-[400] leading-[0.85rem] tracking-[0.03em]">
                    Edit
                  </span>
                </Button>
              </div>
              <div>
                <Button className="flex items-center">
                  <CarbonCloseFilledIcon />
                  <span className="ml-1 font-raleway text-[0.73rem] font-[400] leading-[0.85rem] tracking-[0.03em]">
                    Close
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
