import { Card } from 'antd';
// import Reviews1Img from '../../../../assets/images/card/reviews_1.jpeg';
import { Link } from 'react-router-dom';
import { RentalReview } from '@/types/api';
import { formatRelativeDate } from '@/lib/utils';
import { paths } from '@/config/paths';
import userAvatar from '@/assets/images/user_avatar.jpg';

export const ReviewsCard = ({
  rentalReviews,
}: {
  rentalReviews: RentalReview[]; 
}) => {
  // console.log('rentalReviews', rentalReviews);
  return (
    <>
      {Array.isArray(rentalReviews) &&
        rentalReviews?.map((review) => {
          return (
            <Card
              className="relative rounded-[0.89rem] bg-white shadow-filter"
              key={review?.id}
            >
              <div className="flex flex-col justify-between">
                {/* header */}
                <div className="mb-[0.89rem] flex">
                  <div className="h-[2.93rem] w-[2.93rem] shrink-0 rounded-full">
                    <img
                      src={userAvatar}
                      // src={review.images}
                      className="h-[2.93rem] w-[2.93rem] shrink-0 rounded-full"
                      alt={`Review Images`}
                    />
                  </div>
                  <div className="ml-[0.6rem]">
                    <div className="flex flex-col justify-between">
                      <h4 className="mb-1 font-raleway text-[1.01rem] font-bold leading-[1.2rem] tracking-[0.03em] text-primary">
                        {review?.user?.first_name} {''}
                        {review?.user?.last_name}
                      </h4>
                      <p className="font-raleway text-[0.5rem] font-[300] leading-[1.01rem] tracking-[0.03em]">
                        {formatRelativeDate(review?.created_at)}
                      </p>
                    </div>
                  </div>
                </div>
                {/* header */}
                {/* content */}
                <div className="mb-[2.51rem] flex-grow">
                  <p className="font-raleway text-[0.68rem] font-semibold leading-[1.4rem] tracking-[0.03em] text-secondary">
                    {review?.description}
                  </p>
                </div>
                {/* content */}
                {/* footer */}
                <div className="absolute bottom-[1.2rem]">
                  <Link
                    to={paths.app.review.getHref(review?.id)}
                    className="font-raleway text-[0.68rem] font-semibold leading-[1.4rem] tracking-[0.03em] text-primary"
                  >
                    View all reviews
                  </Link>
                </div>
                {/* footer */}
              </div>
            </Card>
          );
        })}
    </>
  );
};
