import { Rental } from '@/types/api';
import RentalImg1 from '../../../../assets/images/card/listings-4.png';
// import RentalImg2 from '../../../../assets/images/card/listings-5.png'
import StarIcon from '../../../../assets/images/card/small-star.svg';
import LocationIcon from '../../../../assets/images/location.svg';
import { currencyNGN } from '@/utils/constants';
import { onError } from '@/lib/utils';
export const FeaturedCard = ({ rental }: { rental: Rental }) => {
  return (
    <div className="flex h-[9.6rem] items-center rounded-[1.54rem] border-[0.99px] border-primary bg-light px-[0.5rem]">
      <div className="h-[8.6rem] w-[8rem] shrink-0 rounded-[1.54rem]">
        <img
          src={rental.images[0].url}
          alt=""
          className="h-[8.6rem] w-[8rem] rounded-[1.54rem] object-cover"
          onError={(e) => onError(e, RentalImg1)}
        />
      </div>
      <div>
        <div className="ml-[0.74rem]">
          <h6 className="font-raleway text-[0.74rem] font-bold leading-[1.1rem] tracking-[3%] text-black">
            {/* Treasure Court Apartments */}
            {rental.name}
          </h6>
          <div className="flex items-center">
            <img src={StarIcon} alt="" className="mr-1" />
            <p className="font-montserrat text-[7.88px] font-bold leading-[7.88px] text-black">
              4.9
            </p>
          </div>
          <div className="flex items-center">
            <img src={LocationIcon} alt="" className="h-[8.87px] w-[8.87px]" />
            <p className="font-raleway text-[7.88px] font-[400] leading-[9.25px] text-black">
              {/* Lekki Lagos */}
              {rental.address.city}
            </p>
          </div>
          <div className="mt-[1.8rem]">
            <h4 className="font-montserrat text-[0.985rem] font-semibold leading-[1.2rem] tracking-[3%] text-black">
              {currencyNGN} {Number(rental.price)}
              <span className="font-montserrat text-[0.5rem] font-medium leading-[0.8rem] tracking-[3%]">
                / {rental.cycle}
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
