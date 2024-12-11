import { currencyNGN } from '@/utils/constants';
import { useRental } from '../api/get-rental';
import { formatDate } from '@/lib/utils';
import LocationIcon from '@/assets/images/location.svg';
import { Feature, Rental } from '@/types/api';
import ImageCarousel from './image-carousel';

export const GetRentalView = ({ rentalId }: { rentalId: string }) => {
  const rentalQuery = useRental({ rentalId });
  const rental = rentalQuery?.data?.data as Rental;

  return (
    <div className="font-sans">
      <div className="max-w-2xl p-4 max-lg:mx-auto lg:max-w-7xl">
        <div className="grid grid-cols-1 items-start justify-start gap-8 lg:grid-cols-5">
          <div className="top-0 w-full text-center lg:sticky lg:col-span-3">
            <div className="flex justify-between">
              <div>
                <h2 className="font-raleway text-2xl font-semibold leading-4">
                  {rental?.name}
                </h2>
                <div className="mt-2 flex">
                  <img src={LocationIcon} alt="location" className="mr-1" />
                  <p className="text-start font-raleway text-sm font-medium text-muted">
                    {rental?.address.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <p className="text-xl font-bold text-primary">
                  {currencyNGN} {Number(rental?.price)}
                </p>
              </div>
            </div>
            {/* Embla Carousel */}
            <ImageCarousel images={rental?.images} />
          </div>

          <div className="lg:col-span-2">
            <div className="mt-4 flex space-x-2">
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

            <div className="mt-8 flex flex-wrap gap-4">
              <p className="text-4xl font-semibold">
                {currencyNGN} {Number(rental?.price)}/ {rental?.cycle}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">Category</h3>
              <ul className="mt-4 list-disc space-y-3 pl-4 text-sm">
                <li>{rental?.category?.name}</li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Duration</h3>
              <ul className="mt-4 list-disc space-y-3 pl-4 text-sm">
                <li>{formatDate(rental?.duration)}</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">Features</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
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
              <ul className="mt-4 list-disc space-y-3 pl-4 text-sm">
                <li>{rental?.description}</li>
              </ul>
            </div>
            <div className="mt-8">
              <ul className="flex">
                <li className="cursor-pointer border-b-2 border-success px-8 py-3 text-sm font-semibold transition-all">
                  Reviews
                </li>
                <li className="cursor-pointer px-8 py-3 text-sm font-semibold">
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
                      className="ml-1 w-5 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="ml-3 h-2 w-full rounded bg-gray-400">
                      <div className="h-full w-2/3 rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">66%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm font-semibold">4.0</p>
                    <svg
                      className="ml-1 w-5 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="ml-3 h-2 w-full rounded bg-gray-400">
                      <div className="h-full w-1/3 rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">33%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm font-semibold">3.0</p>
                    <svg
                      className="ml-1 w-5 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="ml-3 h-2 w-full rounded bg-gray-400">
                      <div className="h-full w-1/6 rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">16%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm font-semibold">2.0</p>
                    <svg
                      className="ml-1 w-5 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="ml-3 h-2 w-full rounded bg-gray-400">
                      <div className="h-full w-1/12 rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">8%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm font-semibold">1.0</p>
                    <svg
                      className="ml-1 w-5 fill-yellow-300"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="ml-3 h-2 w-full rounded bg-gray-400">
                      <div className="h-full w-[6%] rounded bg-success"></div>
                    </div>
                    <p className="ml-3 text-sm font-semibold">6%</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-start">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="h-12 w-12 rounded-full border-2 border-white"
                />

                <div className="ml-3">
                  <h4 className="text-sm font-semibold">John Doe</h4>
                  <div className="mt-1 flex space-x-1">
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
                    <p className="!ml-2 text-xs font-semibold">2 mins ago</p>
                  </div>
                  <p className="mt-4 text-xs">
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded border border-success bg-transparent px-4 py-2.5 font-semibold"
              >
                Read all reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
