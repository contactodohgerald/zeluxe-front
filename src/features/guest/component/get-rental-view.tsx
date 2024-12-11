import { currencyNGN } from '@/utils/constants';
import { useRental } from '../api/get-rental';
import { formatDate, formatRelativeDate, truncatelongText } from '@/lib/utils';
import LocationIcon from '@/assets/images/location.svg';
import { Feature, Rental, RentalReview } from '@/types/api';
import ImageCarousel from './image-carousel';
import userAvatar from '@/assets/images/user_avatar.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';

export const GetRentalView = ({ rentalId }: { rentalId: string }) => {
  const rentalQuery = useRental({ rentalId });
  const rental = rentalQuery?.data?.data as Rental;
//   console.log('rental-reviews',rental?.reviews)

  return (
    <div className="font-sans">
      <div className="max-w-2xl p-4 max-lg:mx-auto lg:max-w-7xl">
        <div className="grid items-start justify-start grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="top-0 w-full text-center lg:sticky lg:col-span-3">
            <div className="flex justify-between">
              <div className="">
                <h2
                  className={`font-raleway ${rental?.name.length > 15 ? 'overflow-hidden text-ellipsis whitespace-nowrap' : ''} font-semibold leading-4 lg:text-2xl`}
                >
                  {truncatelongText(rental?.name, 21)}
                </h2>
                <div className="flex justify-start mt-2">
                  <img src={LocationIcon} alt="location" className="mr-1" />
                  <p className="text-sm font-medium text-start font-raleway text-muted">
                    {rental?.address.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <p className="text-sm font-bold text-primary lg:text-xl">
                  {currencyNGN} {Number(rental?.price)}
                </p>
              </div>
            </div>
            {/* Embla Carousel */}
            <ImageCarousel images={rental?.images} />
          </div>

          <div className="lg:col-span-2">
            <div className="flex mt-4 space-x-2">
              <svg
                className="w-[18px] fill-yellow-300"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-[18px] fill-yellow-300"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-[18px] fill-yellow-300"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-[18px] fill-yellow-300"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-[18px] fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <h4 className="text-base">500 Reviews</h4>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <p className="text-4xl font-semibold">
                {currencyNGN} {Number(rental?.price)}/ {rental?.cycle}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">Category</h3>
              <ul className="pl-4 mt-4 space-y-3 text-sm list-disc">
                <li>{rental?.category?.name}</li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Duration</h3>
              <ul className="pl-4 mt-4 space-y-3 text-sm list-disc">
                <li>{formatDate(rental?.duration)}</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">Features</h3>
              <ul className="grid gap-3 mt-4 sm:grid-cols-2">
                {rental?.features?.map((feature: Feature) => (
                  <li className="flex items-center text-sm" key={rental?.id}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      className="mr-4 rounded-full bg-green-500 fill-white p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    {feature?.name} {feature?.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Description</h3>
              <ul className="pl-4 mt-4 space-y-3 text-sm list-disc">
                <li>{rental?.description}</li>
              </ul>
            </div>
            <div className="mt-8">
              <ul className="flex">
                <li className="px-8 py-3 text-sm font-semibold transition-all border-b-2 cursor-pointer border-success">
                  Reviews
                </li>
                <li className="px-8 py-3 text-sm font-semibold cursor-pointer">
                  Ratings
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-semibold">
                  Reviews({rental?.reviews?.length})
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold">5.0</p>
                    <svg
                      className="w-5 ml-1 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="w-full h-2 ml-3 bg-gray-400 rounded">
                      <div className="w-2/3 h-full rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">66%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm font-semibold">4.0</p>
                    <svg
                      className="w-5 ml-1 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="w-full h-2 ml-3 bg-gray-400 rounded">
                      <div className="w-1/3 h-full rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">33%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm font-semibold">3.0</p>
                    <svg
                      className="w-5 ml-1 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="w-full h-2 ml-3 bg-gray-400 rounded">
                      <div className="w-1/6 h-full rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">16%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm font-semibold">2.0</p>
                    <svg
                      className="w-5 ml-1 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="w-full h-2 ml-3 bg-gray-400 rounded">
                      <div className="w-1/12 h-full rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">8%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm font-semibold">1.0</p>
                    <svg
                      className="w-5 ml-1 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="w-full h-2 ml-3 bg-gray-400 rounded">
                      <div className="h-full w-[6%] rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">6%</p>
                  </div>
                </div>
              </div>

                {rental?.reviews?.map((review:RentalReview,index) => (
                  <React.Fragment key={`${review?.user?.id}-${index+1}`}>
                   <div className="flex items-start mt-8">
                    <img
                    
                      src={userAvatar}
                      className="w-12 h-12 border-2 border-white rounded-full"
                    />

                    <div className="ml-3">
                      <h4 className="text-sm font-semibold">{review?.user?.first_name} {review?.user?.last_name}</h4>
                      <div className="flex mt-1 space-x-1">
                        <svg
                          className="w-4 fill-yellow-300"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-4 fill-yellow-300"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-4 fill-yellow-300"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-4 fill-[#CED5D8]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-4 fill-[#CED5D8]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <p className="!ml-2 text-xs font-semibold">
                            {formatRelativeDate(review?.created_at)}
                          {/* 2 mins ago */}
                        </p>
                      </div>
                      <p className="mt-4 text-xs">
                        {review?.description}
                      </p>
                    </div>   
                </div>
                    <div className='w-full mt-8 text-center px-4 py-2.5 bg-transparent border rounded border-success '>
                    <Link
                        to={paths.app.reviews.getHref()}
                        type="button"
                        className="font-semibold hover:text-secondary"
                        >
                        Read all reviews
                    </Link>
                    </div>
                </React.Fragment>
                ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
