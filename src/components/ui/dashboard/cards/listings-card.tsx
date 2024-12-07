import CardImg from '../../../../assets/images/card/list-1.jpeg';
import LocationIcon from '../../../../assets/images/location.svg';
import StarIcon from '../../../../assets/images/card/small-star.svg';
import { HeartIcon } from '../../svgs';
import { Button } from '@headlessui/react';
import { useState } from 'react';
import { Active, Rental } from '@/types/api';
import { currencyNGN } from '@/utils/constants';
import { Card } from 'antd';
import Image1 from '../../../../assets/images/card/list-1.jpeg';
import { Link } from 'react-router-dom';
import { VerifiedIcon } from '../../svgs/verified-icon';
import { TelephoneIcon } from '../../svgs/telephone-icon';
import { onError } from '@/lib/utils';

export type ListingCardListProps = {
  listing: Active;
};
export const ListingsCard = ({ listing }: ListingCardListProps) => {
  const [show, setShow] = useState(false);
  // console.log('listingsCard', listing);
  return (
    <div className="flex h-[17.3rem] flex-col items-start justify-start rounded-[1.87rem] bg-light pb-[1.2rem] pl-[0.6rem] pr-[0.6rem] pt-[0.6rem] shadow-card md:w-[12rem]">
      <div className="relative h-[12rem] rounded-[1.1rem] md:w-[10.8rem]">
        <Button
          onClick={() => setShow(!show)}
          className={`absolute right-[0.54rem] top-[0.54rem] ${show ? 'bg-primary' : 'bg-[#FFFFFFC7]'} flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full`}
        >
          <HeartIcon className={`${show ? 'text-white' : 'text-primary'}`} />
        </Button>
        <img
          src={listing.images[0].url || CardImg}
          className="h-[12rem] w-[10.8rem] rounded-[1.1rem]"
          alt="Listing Images"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = CardImg;
          }}
        />
        <div className="absolute left-[2.07rem] top-[8.55rem] h-[1.67rem] w-[7.1rem] rounded-[0.54rem] bg-primary flex justify-center py-[0.34rem] text-white backdrop-blur-[8.605196952819824px] backdrop-filter">
          <p className="font-montserrat  text-start text-[14.35px] font-semibold leading-[17.49px] -tracking-[0.03em] text-[#F5F4F8]">
            {currencyNGN}
            {Number(listing.price)}
          </p>
        </div>
      </div>
      <div className="px-[0.7rem]">
        <div className="mt-[0.75rem] md:mb-[0.75rem]">
          <h4 className="text-nowrap font-raleway text-[0.89rem] font-bold leading-[1.4rem] tracking-[0.03em] text-black">
            {listing.name}
          </h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="mr-[0.5rem] flex items-center gap-x-1">
            <img src={StarIcon} alt="" className="h-[10.76px] w-[10.76px]" />
            <p className="font-montserrat text-[0.6rem] font-[700] leading-[0.6rem] text-primary">
              {/* {rating} */}
              {/* {listing.ratings} */} 4.8
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <img
              src={LocationIcon}
              alt=""
              className="h-[10.76px] w-[10.76px]"
            />
            <p className="font-raleway text-[0.6rem] font-[400] leading-[0.7rem]">
              {/* {location} */}
              {listing.address.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ListingsRowCard = ({ listing }: ListingCardListProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-6 h-[12rem] w-full rounded-[1.87rem] bg-light p-0 shadow-card">
      <div className="flex gap-x-4">
        <div className="relative h-[12rem] w-[50%] shrink-0 rounded-l-[1.1rem]">
          <Button
            onClick={() => setShow(!show)}
            className={`absolute left-[0.54rem] top-[0.54rem] ${show ? 'bg-primary' : 'bg-[#FFFFFFC7]'} flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full`}
          >
            <HeartIcon className={`${show ? 'text-white' : 'text-primary'}`} />
          </Button>
          <img
            src={listing.images[0].url}
            className="h-full w-full rounded-l-[1.1rem] object-cover"
            alt="Listing Image"
            onError={(e) => onError(e, CardImg)}
          />
          <div className="absolute left-[2.2rem] top-[8.55rem] rounded-[0.54rem] bg-primary px-[0.54rem] py-[0.34rem] text-white backdrop-blur-[8.605196952819824px] backdrop-filter">
            {listing.price}
          </div>
        </div>

        <div className="">
          <div className="mb-[0.75rem] mt-[0.75rem]">
            <h4 className="font-raleway text-[0.89rem] font-bold leading-[1.4rem] tracking-[3%] text-black">
              {listing.name}
            </h4>
          </div>
          {/* <div className=""> */}
          <div className="mb-[0.7rem] flex items-center gap-x-1">
            <img src={StarIcon} alt="" className="h-[10.76px] w-[10.76px]" />
            <p className="font-montserrat text-[0.6rem] font-[700] leading-[0.6rem] text-primary">
              {/* {listing.ratings} */} 4.2
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <img
              src={LocationIcon}
              alt=""
              className="h-[10.76px] w-[10.76px]"
            />
            <p className="font-raleway text-[0.6rem] font-[400] leading-[0.7rem]">
              {listing.address.location}
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export const RentalsRowCard = ({ rental }: { rental: Rental }) => {
  return (
    <Card key={rental.id} className="mb-[1.63rem] w-full bg-[#D9D9D92B]">
      <div
        className="flex flex-col sm:flex-row md:items-center"
        key={rental.id}
      >
        <div className="mr-[1.4rem]">
          <img
            src={rental?.images[0]?.url}
            className="h-[10.3rem] w-[13.85rem] rounded-[1.41rem] object-cover"
            alt={`${rental.images} Images`}
            onError={(e) => onError(e, Image1)}
          />
        </div>
        <div className="flex-grow">
          <h4 className="mb-[0.63rem] text-nowrap font-raleway text-[1.5rem] font-bold leading-[1.8rem] tracking-[0.03em] text-secondary">
            {rental?.name}
          </h4>
          <p className="mb-[0.63rem] font-montserrat text-[1.1rem] font-semibold leading-[1.32rem] tracking-[0.03em] text-primary">
            ₦{rental?.price}
            <span className="font-montserrat text-[0.5rem] font-medium leading-[0.8rem] tracking-[0.03em] text-secondary">
              /Per Annum
            </span>
          </p>
          <Button className="mb-[0.58rem] rounded-[1.2rem] bg-primary p-[0.6rem] font-raleway text-[0.63rem] font-medium leading-[0.74rem] tracking-[0.03em] text-white backdrop-blur-[10.09px] backdrop-filter">
            {rental?.address?.location}, {rental?.address?.city}
          </Button>
          <div className="mb-[0.63rem] flex items-center">
            <p className="font-raleway text-[0.55rem] font-bold leading-[0.65rem] tracking-[0.03em] text-black">
              {rental?.owner.is_verified ? 'verified' : 'not verified'}
            </p>
            <p className="">
              {rental?.owner.is_verified ? (
                <VerifiedIcon className="ml-2" />
              ) : null}
            </p>
          </div>

          <Link
            to={`/${rental?.slug}`}
            className="flex cursor-pointer items-center font-raleway text-[0.4rem] font-[400] leading-[0.46rem] tracking-[0.03em] text-primary underline hover:text-primary hover:underline"
          >
            More Details
          </Link>
        </div>
        <div className="mt-3 flex flex-col justify-end md:mt-32">
          <div className="mb-[0.6rem]">
            <p className="text-nowrap font-raleway text-[0.73rem] font-[400] leading-[0.63rem] tracking-[0.03em] text-secondary">
              {rental?.owner?.first_name} {rental?.owner?.last_name}
            </p>
          </div>
          <div className="mb-[0.6rem]">
            <p className="flex items-center text-nowrap font-raleway text-[0.73rem] font-[400] leading-[0.63rem] tracking-[0.03em] text-secondary">
              <TelephoneIcon className="mr-2" />{' '}
              <span>{rental?.owner?.phone} </span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
