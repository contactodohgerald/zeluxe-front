import CardImg from '../../../../assets/images/card/lists-2.jpeg';
import { Link } from 'react-router-dom';
export const apartmentItems = [
  {
    id: 1,
    title: 'Rent your dream Property now!',
    content: 'Acquire the most luxurious properties you can dream of in Lagos!',
    img_url: CardImg,
  },
  {
    id: 2,
    title: 'Enjoy the Best Vacations with us!',
    content: 'Live out your dream vacations with our world-class properties!',
    img_url: CardImg,
  },
];

type CardListpropsProps = {
  content?: string;
  title?: string;
  img_url: string;
};
type ApartmentProps = {
  apartmentItems: CardListpropsProps[];
};
export const ApartmentCard = ({ apartmentItems }: ApartmentProps) => {
  return apartmentItems.map((item) => (
    <Link to="">
      <div
        key={item.content}
        className="relative flex h-[11rem] flex-col items-center rounded-[1.1rem]"
      >
        <img
          src={item.img_url}
          className="h-full max-h-[11rem] w-full rounded-[1.1rem] object-cover"
          alt=""
        />
        <div className="absolute left-[1.34rem] top-[2.43rem] z-[1] max-w-[11.75rem]">
          <h4 className="font-raleway text-[1.1rem] font-bold leading-[1.3rem] tracking-[3%] text-white">
            {item.title}
          </h4>
          <p className="mt-[6.54px] font-raleway text-[0.61rem] font-[400] leading-[0.71rem] text-white">
            {item.content}
          </p>
        </div>
        {/* overlay */}
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-[1.1rem] bg-black opacity-30"></div>
        {/* overlay */}
      </div>
    </Link>
  ));
};
