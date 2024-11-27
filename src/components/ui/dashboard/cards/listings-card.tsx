import CardImg from '../../../../assets/images/card/list-1.jpeg';
import LocationIcon from '../../../../assets/images/location.svg';
import StarIcon from '../../../../assets/images/card/small-star.svg';
import { HeartIcon } from '../../svgs';
import { Button } from '@headlessui/react';
import { useState } from 'react';

type CardListpropsProps = {
  location: string;
  title: string;
  image: string;
  price: string;
  rating: string;
};

export const listingCardItems = [
  {
    id: 1,
    title: 'The George',
    image: CardImg,
    // icon:'',
    location: 'Ikoyi Lagos',
    rating: '4.9',
    price: '212,000,000',
    // reaction_icon:''
  },
  {
    id: 2,
    title: 'Maison Fahrenheit',
    image: CardImg,
    // icon:'',
    location: 'Ajah Lagos',
    rating: '4.8',
    price: '314,000,000',
    // reaction_icon:''
  },
  {
    id: 3,
    title: 'The George',
    image: CardImg,
    // icon:'',
    location: 'Ikoyi Lagos',
    rating: '4.9',
    price: '212,000,000',
    // reaction_icon:''
  },
  {
    id: 4,
    title: 'Maison Fahrenheit',
    image: CardImg,
    // icon:'',
    location: 'Ajah Lagos',
    rating: '4.8',
    price: '314,000,000',
    // reaction_icon:''
  },
];
export const ListingsCard = ({
  title,
  price,
  rating,
  image,
  location,
}: CardListpropsProps) => {
  const [show, setShow] = useState(false);
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
          src={image}
          className="h-[12rem] w-[10.8rem] rounded-[1.1rem]"
          alt=""
        />
        <div className="absolute left-[2.2rem] top-[8.55rem] rounded-[0.54rem] bg-primary px-[0.54rem] py-[0.34rem] text-white backdrop-blur-[8.605196952819824px] backdrop-filter">
          {price}
        </div>
      </div>
      <div className="px-[0.7rem]">
        <div className="mt-[0.75rem] md:mb-[0.75rem]">
          <h4 className="text-nowrap font-raleway text-[0.89rem] font-bold leading-[1.4rem] tracking-[0.03em] text-black">
            {title}
          </h4>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="mr-[0.5rem] flex items-center gap-x-1">
            <img src={StarIcon} alt="" className="h-[10.76px] w-[10.76px]" />
            <p className="font-montserrat text-[0.6rem] font-[700] leading-[0.6rem] text-primary">
              {rating}
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <img
              src={LocationIcon}
              alt=""
              className="h-[10.76px] w-[10.76px]"
            />
            <p className="font-raleway text-[0.6rem] font-[400] leading-[0.7rem]">
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ListingsRowCard = ({
  title,
  price,
  rating,
  image,
  location,
}: CardListpropsProps) => {
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
            src={image}
            className="h-full w-full rounded-l-[1.1rem] object-cover"
            alt=""
          />
          <div className="absolute left-[2.2rem] top-[8.55rem] rounded-[0.54rem] bg-primary px-[0.54rem] py-[0.34rem] text-white backdrop-blur-[8.605196952819824px] backdrop-filter">
            {price}
          </div>
        </div>

        <div className="">
          <div className="mb-[0.75rem] mt-[0.75rem]">
            <h4 className="font-raleway text-[0.89rem] font-bold leading-[1.4rem] tracking-[3%] text-black">
              {title}
            </h4>
          </div>
          {/* <div className=""> */}
          <div className="mb-[0.7rem] flex items-center gap-x-1">
            <img src={StarIcon} alt="" className="h-[10.76px] w-[10.76px]" />
            <p className="font-montserrat text-[0.6rem] font-[700] leading-[0.6rem] text-primary">
              {rating}
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <img
              src={LocationIcon}
              alt=""
              className="h-[10.76px] w-[10.76px]"
            />
            <p className="font-raleway text-[0.6rem] font-[400] leading-[0.7rem]">
              {location}
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
