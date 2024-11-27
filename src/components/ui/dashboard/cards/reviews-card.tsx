import { Card } from 'antd';
import Reviews1Img from '../../../../assets/images/card/reviews_1.jpeg';
import Reviews2Img from '../../../../assets/images/card/reviews_2.jpeg';
import Reviews3Img from '../../../../assets/images/card/reviews_3.jpeg';
import Reviews4Img from '../../../../assets/images/card/reviews_4.jpeg';
import Reviews5Img from '../../../../assets/images/card/reviews_5.jpeg';
import Reviews6Img from '../../../../assets/images/card/reviews_6.jpeg';
import { Link } from 'react-router-dom';
export const myReviewsCardItems = [
  {
    id: 1,
    images: Reviews1Img,
    name: 'James Rodriguez',
    time: '3 Weeks ago',
    content:
      'This app has completely transformed my house-hunting experience! The interface is intuitive, and the listings are always up-to-date. I found my dream apartment in no time. I am definetly going to recommend this to all my family members and friends! Love this app!',
  },
  {
    id: 2,
    images: Reviews2Img,
    name: 'Alex Johnson',
    time: '2 Months ago',
    content:
      'While the app offers a lot of useful features, I found the search function to be a bit slow at times. It would be more helpful if the filters were more precise. Decent app, but needs some fine-tuning.',
  },
  {
    id: 3,
    images: Reviews3Img,
    name: 'Sara Green',
    time: '1 Month ago',
    content: 'They have the best customer service. They are top-notch.  ',
  },
  {
    id: 4,
    images: Reviews4Img,
    name: 'Sophia Martinez',
    time: '5 Months ago',
    content:
      'Finding a rental property has never been easier! I am more than excited to leave in my new home.',
  },
  {
    id: 5,
    images: Reviews5Img,
    name: 'Michael Brown',
    time: '5 Days ago',
    content:
      "I love how detailed and comprehensive the listings are. The app provides all the necessary information and high-quality photos, making it easy to make an informed decision. Best real estate app I've used!",
  },
  {
    id: 6,
    images: Reviews6Img,
    name: 'William Anderson',
    time: '2 Months ago',
    content:
      "As a landlord, this app makes managing my listings incredibly easy. The rental process is streamlined, and I've had great success finding reliable tenants. Five stars all the way!",
  },
  {
    id: 7,
    images: Reviews6Img,
    name: 'Isabella Garcia',
    time: '2 Days ago',
    content:
      'The customer service is top-notch. Whenever I had a question, the support team was quick to respond and incredibly helpful. The app itself is user-friendly and well-designed.',
  },
  {
    id: 8,
    images: Reviews6Img,
    name: 'Ryan Miller',
    time: '5 Weeks ago',
    content:
      'TThe app has potential, but I found some outdated listings that were no longer available. It would be great if the information was more frequently updated. Other than that, it’s okay for basic searches.',
  },
];
export const ReviewsCard = () => {
  return (
    <>
      {myReviewsCardItems.map((item) => (
        <Card
          className="relative rounded-[0.89rem] bg-white shadow-filter"
          key={item.id}
        >
          <div className="flex flex-col justify-between">
            {/* header */}
            <div className="mb-[0.89rem] flex">
              <div className="h-[2.93rem] w-[2.93rem] shrink-0 rounded-full">
                <img
                  src={item.images}
                  className="h-[2.93rem] w-[2.93rem] shrink-0 rounded-full"
                  alt={`${item.name} Images`}
                />
              </div>
              <div className="ml-[0.6rem]">
                <div className="flex flex-col justify-between">
                  <h4 className="mb-1 font-raleway text-[1.01rem] font-bold leading-[1.2rem] tracking-[0.03em] text-primary">
                    {item.name}
                  </h4>
                  <p className="font-raleway text-[0.5rem] font-[300] leading-[1.01rem] tracking-[0.03em]">
                    {item.time}
                  </p>
                </div>
              </div>
            </div>
            {/* header */}
            {/* content */}
            <div className="mb-[2.51rem] flex-grow">
              <p className="font-raleway text-[0.68rem] font-semibold leading-[1.4rem] tracking-[0.03em] text-secondary">
                {item.content}
              </p>
            </div>
            {/* content */}
            {/* footer */}
            <div className="absolute bottom-[1.2rem]">
              <Link
                to=""
                className="font-raleway text-[0.68rem] font-semibold leading-[1.4rem] tracking-[0.03em] text-primary"
              >
                View all reviews
              </Link>
            </div>
            {/* footer */}
          </div>
        </Card>
      ))}
    </>
  );
};
