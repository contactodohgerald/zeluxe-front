import { Card } from 'antd';
import Image1 from '../../../../assets/images/card/list-1.jpeg';
import { Button } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { VerifiedIcon } from '../../svgs/verified-icon';
import { TelephoneIcon } from '../../svgs/telephone-icon';
import { Rental } from '@/types/api';
import { paths } from '@/config/paths';

export const RentalsCard = ({ rentals }: { rentals: Rental[] }) => {
  // console.log('rentals', rentals);
  return (
    <>
      {rentals?.map((rental) => (
        <Card
          key={rental.id}
          className="mb-[1.63rem] box-border w-full bg-[#D9D9D92B]"
        >
          <div
            className="flex flex-col sm:flex-row md:items-center"
            key={rental.id}
          >
            <div className="mr-[1.4rem]">
              <img
                src={rental?.images[0]?.url || Image1}
                className="h-[10.3rem] max-w-[13.85rem] rounded-[1.41rem] object-cover"
                alt={`${rental.images} Images`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = Image1;
                }}
              />
            </div>
            <div className="flex-grow">
              <h4
                className={`mb-[0.63rem] ${rental?.name.length >= 15 ? 'overflow-hidden text-ellipsis' : ''} max-w-xs text-nowrap font-raleway text-[1.5rem] font-bold leading-[1.8rem] tracking-[0.03em] text-secondary`}
              >
                {rental?.name}
              </h4>
              <p className="mb-[0.63rem] font-montserrat text-[1.1rem] font-semibold leading-[1.32rem] tracking-[0.03em] text-primary">
                ₦{Number(rental?.price)}
                <span className="font-montserrat text-[0.5rem] font-medium leading-[0.8rem] tracking-[0.03em] text-secondary">
                  /Per Annum
                </span>
              </p>
              <Button className="mb-[0.58rem] rounded-[1.2rem] bg-primary p-[0.6rem] font-raleway text-[0.63rem] font-medium leading-[0.74rem] tracking-[0.03em] text-white backdrop-blur-[10.09px] backdrop-filter">
                {rental?.address?.nearest_landmark}, {rental?.address?.city}
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
                to={paths.app.rental.getHref(rental?.id)}
                className="flex cursor-pointer items-center font-raleway text-[0.4rem] font-[400] leading-[0.46rem] tracking-[0.03em] text-primary underline hover:text-primary hover:underline"
              >
                More Details
              </Link>
            </div>
            <div className="mt-3 flex flex-col md:mt-32">
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
      ))}
    </>
  );
};
