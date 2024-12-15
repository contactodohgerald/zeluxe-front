import { Head } from '@/components/seo';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { useRental } from '@/features/guest/api/get-rental';
import { Link, useParams } from 'react-router-dom';
import { Spinner } from '@/components/ui/spinner';
import { currencyNGN } from '@/utils/constants';
// import ImageCarousel from '@/features/guest/component/image-carousel';
import Img1 from '@/assets/images/card/lists-2.jpeg';
import Img2 from '@/assets/images/card/listings-5.jpeg';
import avatarImg from '@/assets/images/user_avatar.jpg';
import { Button } from '@/components/ui/button';
import { Modals } from '@/components/ui/modals/modal';
import React, { useState } from 'react';
import { BookingForm } from '@/features/guest/component/form/booking-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faBed,
  faEnvelopeSquare,
  faGem,
  faHeart,
  faShareFromSquare,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { formatDateToMonthDay, formatRelativeDate, onError } from '@/lib/utils';
import { Feature, Image, Rating, RentalReview } from '@/types/api';
import { CommentForm } from '@/components/ui/comment/comment';
import { useUserStore } from '@/store/user-store';
import { useUser } from '@/lib/auth';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { StarRatings } from '@/components/ui/star/star-ratings';
// export const LandingDetailRoute = () => {
//   const { rentalId } = useParams<{ rentalId: string }>();
//   const rentalQuery = useRental({ rentalId } as any);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedId, setSelectedId] = useState('');

//   if (rentalQuery.isLoading) {
//     return (
//       <div className="flex h-48 w-full items-center justify-center">
//         <Spinner size="lg" />
//       </div>
//     );
//   }

//   const handleOpen = (rentalId: string) => {
//     setSelectedId(rentalId);
//     setIsOpen(true);
//   };
//   const rental = rentalQuery?.data?.data;
//   // console.log(rental?.id);

//   if (!rental) return null;
//   return (
//     <>
//       <Head description="Welcome to Zeluxe Listings Home Page" />
//       <Header />
//       <main>
//         <section className="py-8 antialiased md:py-16">
//           <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
//             <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
//               <div className="max-w-md shrink-0 sm:mx-auto lg:max-w-lg">
//                 <ImageCarousel
//                   images={rental?.images}
//                   className="max-w-md shrink-0 sm:mx-auto lg:max-w-lg"
//                 />
//               </div>

//               <div className="mt-6 sm:mt-8 lg:mt-0">
//                 <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
//                   {rental?.name}
//                 </h1>
//                 <div className="mt-4 sm:flex sm:items-center sm:gap-4">
//                   <p className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
//                     {/* ₦30,000 / day */}
//                     {`${currencyNGN} ${Number(rental?.price)} / ${rental?.cycle}`}
//                   </p>

//                   <div className="mt-2 flex items-center gap-2 sm:mt-0">
//                     <div className="flex items-center gap-1">
//                       <svg
//                         className="h-4 w-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
//                       </svg>
//                       <svg
//                         className="h-4 w-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
//                       </svg>
//                       <svg
//                         className="h-4 w-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
//                       </svg>
//                       <svg
//                         className="h-4 w-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
//                       </svg>
//                       <svg
//                         className="h-4 w-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
//                       </svg>
//                     </div>
//                     <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
//                       (5.0)
//                     </p>
//                     <a
//                       href="#"
//                       className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
//                     >
//                       345 Reviews
//                     </a>
//                   </div>
//                 </div>

//                 <div className="mt-6 sm:mt-8 sm:flex sm:items-center sm:gap-4">
//                   <Button
//                     onClick={() => handleOpen(rental?.id || '')}
//                     className="mt-4 flex items-center justify-center rounded-lg bg-success px-5 py-2.5 text-sm font-medium text-white hover:bg-primary focus:outline-none sm:mt-0"
//                     role="button"
//                   >
//                     Book This Apartment
//                   </Button>
//                 </div>

//                 <hr className="my-6 border-gray-200 dark:border-gray-800 md:my-8" />

//                 <p className="mb-6 text-gray-500 dark:text-gray-400">
//                   {/* Good Road . 24/7 light . Serenity . Security */}
//                   {rental?.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//       <Modals IsOpen={isOpen} setIsOpen={setIsOpen}>
//         {/* <Card className="relative max-h-full w-full max-w-2xl p-4"> */}
//         <BookingForm setIsOpen={setIsOpen} rentalId={selectedId || ''} />
//         {/* </Card> */}
//       </Modals>
//     </>
//   );
// };

export const LandingDetailRoute = () => {
  const { rentalId } = useParams<{ rentalId: string }>();
  const rentalQuery = useRental({ rentalId } as any);
  const [isOpen, setIsOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const { isAuthenticated } = useUserStore();
  const user = useUser();
  const rental = rentalQuery?.data?.data;
  const averageRatings =
    rental?.ratings?.length > 0
      ? (
          rental.ratings.reduce(
            (total: number, rating: Rating) => total + rating.score,
            0,
          ) / rental.ratings.length
        ).toFixed(2)
      : 0;
  if (rentalQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const handleOpen = (rentalId: string) => {
    setSelectedId(rentalId);
    setIsOpen(true);
  };

  if (!rental) return null;
  return (
    <>
      <Head description="Welcome to Zeluxe Listings Home Page" />
      <Header />
      <main>
        <section className="py-8 antialiased md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="bg-default-background container flex h-full w-full max-w-none flex-col items-center gap-4 py-12">
              <div className="flex w-full flex-col items-start gap-8">
                <div className="flex w-full flex-col items-start gap-8">
                  <div className="flex w-full items-end gap-1">
                    <div className="flex shrink-0 grow basis-0 flex-col items-start gap-1">
                      <span className="text-nowrap text-xl font-bold text-secondary sm:text-3xl">
                        {rental?.name}
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        <div className="flex items-center gap-1">
                          <FontAwesomeIcon
                            className="font-montserrat font-bold"
                            icon={faStar}
                          />
                          <span className="font-montserrat">
                            {averageRatings}
                          </span>
                        </div>
                        <span className="font-montserrat">•</span>
                        <span className="font-montserrat">
                          {rental?.reviews?.length || 0} reviews
                        </span>
                        <span className="font-montserrat">•</span>
                        <span className="text-caption font-medium">
                          {rental?.address.location}, {rental?.address.city}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 md:items-center">
                      <Button
                        className="bg-transparent text-secondary shadow-none"
                        onClick={() => {}}
                      >
                        <FontAwesomeIcon
                          icon={faShareFromSquare}
                          className="mx-2"
                        />
                        Share
                      </Button>
                      <Button
                        className="bg-transparent text-secondary shadow-none"
                        // icon="FeatherHeart"
                        onClick={() => {}}
                      >
                        <FontAwesomeIcon icon={faHeart} className="mx-2" />
                        Save
                      </Button>
                    </div>
                  </div>
                  <div className="mobile:h-auto mobile:w-full mobile:flex-none mobile:flex-col mobile:gap-2 mobile:relative mobile:grid mobile:grid-cols-2 relative grid w-full grid-cols-2 items-start gap-2 overflow-hidden rounded-md">
                    <Button
                      className="absolute bottom-4 right-4"
                      // variant="neutral-secondary"
                      // iconRight={null}
                      onClick={() => {}}
                    >
                      Show all photos
                    </Button>
                    <div className="flex items-center justify-center gap-2">
                      <img
                        className="shrink-0 grow basis-0 self-stretch bg-cover bg-center bg-no-repeat object-cover"
                        src={rental?.images[0]?.url}
                        onError={(e) => onError(e, Img1)}
                      />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 items-start gap-2">
                      {rental?.images.map((image: Image) => (
                        <img
                          key={image?.id}
                          className="shrink-0 grow basis-0 self-stretch bg-cover bg-center bg-no-repeat object-cover"
                          src={image?.url}
                          onError={(e) => onError(e, Img2)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-12">
                  <div className="flex w-full flex-wrap items-start justify-between gap-16">
                    <div className="flex shrink-0 grow basis-0 flex-col items-start gap-6">
                      <div className="flex w-full flex-col items-start gap-1">
                        <span className="text-heading-3 font-heading-3 font-montserrat">
                          Entire {rental?.listing_type} in{' '}
                          {rental?.address.location}, {rental?.address.city}
                        </span>
                        <div className="flex items-center gap-1">
                          {rental?.features?.map((feature: Feature) => (
                            <React.Fragment key={feature?.id}>
                              <span className="text-body font-body font-montserrat lowercase">
                                {feature?.value} {feature?.name}
                              </span>
                              <span className="font-montserrat">•</span>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-12">
                        <div className="border-neutral-border bg-default-background flex w-full items-center gap-6 rounded-md border-gray-300 px-6 py-6 shadow-sm">
                          <div className="flex shrink-0 grow basis-0 items-center justify-center gap-2">
                            <FontAwesomeIcon
                              className="text-heading-2 font-heading-2 font-montserrat"
                              icon={faAward}
                            />
                            <span className="whitespace-pre-wrap text-center font-montserrat font-bold">
                              {'Guest favorite'}
                            </span>
                          </div>
                          <div className="flex h-8 w-px flex-none flex-col items-center gap-2 bg-neutral-300" />
                          <div className="flex shrink-0 grow basis-0 flex-col items-center justify-center">
                            <span className="font-montserrat">
                              {averageRatings}
                            </span>
                            <div className="flex items-center">
                              {rental?.ratings?.map((rating: Rating) => (
                                <div
                                  key={rating?.id}
                                  className="flex items-center space-x-1"
                                >
                                  {Array(rating?.score)
                                    .fill(null)
                                    .map((_, index) => (
                                      <FontAwesomeIcon
                                        key={index}
                                        className="font-montserrat font-bold"
                                        icon={faStar}
                                      />
                                    ))}
                                </div>
                              ))}
                            </div>
                            <Link
                              to={'#'}
                              onClick={() => setIsRatingOpen(true)}
                              className="cursor-pointer font-montserrat underline"
                            >
                              Ratings
                            </Link>
                          </div>
                          <div className="flex h-8 w-px flex-none flex-col items-center gap-2 bg-neutral-300" />
                          <div className="flex shrink-0 grow basis-0 flex-col items-center justify-center">
                            <span className="text-heading-3 font-heading-3 font-montserrat">
                              {rental?.reviews?.length}
                            </span>
                            <span
                              className="font-montserrat underline"
                              onClick={() => {}}
                            >
                              Reviews
                            </span>
                          </div>
                        </div>
                        <div className="flex w-full shrink-0 grow basis-0 items-center gap-4">
                          <Avatar image={avatarImg} />
                          <div className="flex flex-col items-start gap-1">
                            <span className="font-montserrat font-bold">
                              Hosted by {rental?.owner.first_name}
                            </span>
                            <span className="text-body font-body text-subtext-color">
                              Superhost
                            </span>
                          </div>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                        <div className="flex w-full shrink-0 grow basis-0 flex-col items-start gap-6">
                          <ListingFeature
                            icon="fas fa-desktop"
                            title="Dedicated workspace"
                            description="A common area with wifi that's well-suited for working.\n\n"
                          />
                          {/* <ListingFeature
                            icon={faDoorOpen}
                            title="Self check-in"
                            description="Check yourself in with the lockbox."
                          /> */}
                          {/* <ListingFeature
                            icon="FeatherCalendarDays"
                            title="Free cancellation before March 4"
                            description=""
                          /> */}
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                        <div className="flex flex-col items-start gap-6">
                          <span className="text-body font-body font-montserrat">
                            {rental?.description}
                          </span>
                          <Button className="bg-primary" onClick={() => {}}>
                            Show more
                          </Button>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                        <div className="flex w-full flex-col items-start gap-6">
                          <span className="text-heading-3 font-heading-3 w-full font-montserrat">
                            Where you&#39;ll sleep
                          </span>
                          <div className="mobile:flex-col mobile:flex-wrap mobile:gap-4 flex w-full flex-wrap items-start gap-4">
                            <div className="border-neutral-border bg-default-background flex max-w-[192px] shrink-0 grow basis-0 flex-col items-start gap-6 rounded-md border-gray-300 px-6 py-6 shadow-sm">
                              <FontAwesomeIcon
                                className="text-heading-2 font-heading-2 font-montserrat"
                                // name="FeatherBedDouble"
                                icon={faBed}
                              />
                              <div className="flex flex-col items-start gap-2">
                                <span className="font-montserrat font-bold">
                                  Bedroom
                                </span>
                                <span className="font-montserrat">
                                  1 queen bed
                                </span>
                              </div>
                            </div>
                            <div className="border-neutral-border bg-default-background flex max-w-[192px] shrink-0 grow basis-0 flex-col items-start gap-6 rounded-md border-gray-300 px-6 py-6 shadow-sm">
                              <FontAwesomeIcon
                                className="text-heading-2 font-heading-2 font-montserrat"
                                // name="FeatherSofa"
                                icon={faBed}
                              />
                              <div className="flex flex-col items-start gap-2">
                                <span className="font-montserrat font-bold">
                                  Living Room
                                </span>
                                <span className="font-montserrat">1 sofa</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                        <div className="flex w-full flex-col items-start gap-6">
                          <span className="text-heading-3 font-heading-3 w-full font-montserrat">
                            What&#39;s included
                          </span>
                          <div className="mobile:flex-col mobile:gap-4 flex w-full items-start gap-6">
                            <div className="flex shrink-0 grow basis-0 flex-col items-start gap-4">
                              <ListingStat icon="fa fa-bed" text="Bedroom" />
                              <ListingStat
                                icon="fa fa-television"
                                text="Television"
                              />
                            </div>
                            <div className="flex shrink-0 grow basis-0 flex-col items-start gap-4">
                              <ListingStat
                                icon="fa fa-wheelchair"
                                text="Wheelchair accessible"
                              />
                              <ListingStat icon="fa fa-wifi" text="Wifi" />
                            </div>
                          </div>
                          <Button onClick={() => {}}>Show all amenities</Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex-basis flex h-auto min-w-[288px] max-w-[384px] shrink-0 flex-grow flex-col items-center gap-6 lg:min-w-[288px]">
                      <div className="border-neutral-border bg-default-background flex w-full flex-col items-start gap-6 rounded-md border-gray-300 px-6 py-6 shadow-lg">
                        <div className="flex items-end gap-1">
                          <span className="font-montserrat text-xl font-semibold">
                            {currencyNGN}
                            {parseInt(rental?.price)}
                          </span>
                          <span className="font-montserrat font-bold">
                            {rental?.cycle}
                          </span>
                        </div>
                        <div className="flex w-full flex-col items-start overflow-hidden rounded-2xl border border-gray-300 p-2">
                          <ListingSelect
                            className="h-auto w-full flex-none"
                            label="Dates"
                            // value="Dec 3 – Dec 9"
                            value={`${formatDateToMonthDay(rental?.duration)}`}
                          />
                          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                          <ListingSelect
                            className="h-auto w-full flex-none"
                            label="Guests"
                            value="2 people"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-4 md:w-full">
                          <Button
                            className="h-10 w-full flex-none"
                            onClick={() => handleOpen(rental?.id || '')}
                          >
                            Book
                          </Button>
                          <span className="w-full text-center font-montserrat">
                            You won&#39;t be charged yet
                          </span>
                        </div>
                        <div className="flex w-full flex-col items-start gap-4">
                          <div className="flex w-full items-center justify-between">
                            <span className="text-body font-body font-montserrat underline">
                              {currencyNGN} {rental?.price} x 5 nights
                            </span>
                            <span className="text-body font-body font-montserrat">
                              {currencyNGN} {rental?.price * 5}
                            </span>
                          </div>
                          <div className="flex w-full items-center justify-between">
                            <span className="text-body font-body font-montserrat underline">
                              Cleaning fee
                            </span>
                            <span className="text-body font-body font-montserrat">
                              {/* $50 */}
                            </span>
                          </div>
                          <div className="flex w-full items-center justify-between">
                            <span className="text-body font-body font-montserrat underline">
                              Service fee
                            </span>
                            <span className="text-body font-body font-montserrat">
                              {/* $150 */}
                            </span>
                          </div>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                        <div className="flex w-full items-center justify-between">
                          <span className="font-montserrat font-bold">
                            Total before taxes
                          </span>
                          <span className="font-montserrat font-bold">
                            {/* $1,200 */}
                          </span>
                        </div>
                      </div>
                      <div className="border-neutral-border bg-default-background flex w-full items-center gap-6 rounded-md border-gray-300 px-6 py-6 shadow-sm">
                        <FontAwesomeIcon
                          className="text-heading-1 font-heading-1 text-brand-700"
                          // name="FeatherGem"
                          icon={faGem}
                        />
                        <div className="flex flex-col items-start gap-1">
                          <span className="font-montserrat font-bold">
                            This is a rare find
                          </span>
                          <span className="">
                            {rental?.name}&#39;s place is usually fully booked.
                          </span>
                        </div>
                      </div>
                      <Button onClick={() => {}}>Report this listing</Button>
                    </div>
                  </div>
                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                  <div className="flex flex-col items-start gap-y-8">
                    <span className="font-montserrat text-3xl font-semibold">
                      Reviews ({rental?.reviews?.length})
                    </span>
                    <div className="flex w-full flex-col items-start gap-12">
                      <div className="flex w-full flex-col items-start gap-16 lg:flex-row">
                        {rental?.reviews?.map((review: RentalReview) => (
                          <ListingReview
                            key={review?.id}
                            photo={avatarImg}
                            name={`${review?.user?.first_name} ${review?.user?.last_name}`}
                            location={review?.address?.location || 'unknown'}
                            date={formatRelativeDate(review?.updated_at)}
                            desc={review?.description}
                            review=""
                            //  review="Felicity’s place is very unique. It’s minimalistic and streamlined. Check in was clear and easy. The place and especially the bathroom was clean and had nice amenities."
                            // review={review?.user?.last_name}
                          />
                        ))}
                      </div>
                      {isAuthenticated &&
                      user?.data?.id !== rental?.owner_id ? (
                        <div className="w-full">
                          <CommentForm rentalId={rental?.id} />
                        </div>
                      ) : null}
                    </div>
                    <Button onClick={() => {}}>Show all reviews</Button>
                  </div>
                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                  <div className="flex w-full flex-col items-start gap-6">
                    <span className="text-heading-3 font-heading-3 font-montserrat">
                      Location
                    </span>
                    <img
                      className="w-full flex-none"
                      src="https://res.cloudinary.com/subframe/image/upload/v1711417576/shared/bsa3eonjzvhxusz9aqgr.png"
                    />
                    <div className="flex w-full flex-col items-start gap-2">
                      <span className="w-full whitespace-pre-wrap font-montserrat font-bold">
                        {'Mill Valley, California, United States'}
                      </span>
                      <span className="text-body font-body w-full whitespace-pre-wrap font-montserrat">
                        {
                          'Floating apartment surrounded by a parade of wildlife including ducks, geese, egrets, blue herons and pelicans floating or flying by. Awaken to a beautiful sunrise from the comfort of your bed or your deck.\n'
                        }
                      </span>
                      <LinkButton size="medium" onClick={() => {}}>
                        Show more
                      </LinkButton>
                    </div>
                  </div>
                  <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                  <div className="flex w-full flex-col items-start gap-6">
                    <div className="flex w-full items-center gap-4">
                      <Avatar image={avatarImg} />
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-heading-3 font-heading-3 font-montserrat">
                          Hosted by {rental?.owner?.first_name}
                        </span>
                        <span className="text-subtext-color">
                          Joined in January 2013
                        </span>
                      </div>
                    </div>
                    <div className="mobile:flex-col mobile:flex-wrap mobile:gap-16 flex w-full flex-wrap items-start gap-16">
                      <div className="flex shrink-0 grow basis-0 flex-col items-start gap-6">
                        <div className="mobile:flex-row mobile:flex-wrap mobile:gap-6 flex items-start gap-6">
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              className="text-body font-body font-montserrat"
                              icon={faStar}
                            />
                            <span className="font-montserrat font-bold">
                              120 reviews
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              className="text-body font-body font-montserrat"
                              icon={faEnvelopeSquare}
                            />
                            <span className="font-montserrat font-bold">
                              Identity verified
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              className="text-body font-body font-montserrat"
                              icon={faAward}
                            />
                            <span className="font-montserrat font-bold">
                              Superhost
                            </span>
                          </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-2">
                          <span className="w-full whitespace-pre-wrap font-montserrat font-bold">
                            {'During your stay\n'}
                          </span>
                          <span className="text-body font-body w-full whitespace-pre-wrap font-montserrat">
                            {
                              'You have total privacy and I am available to answer questions you may have about the area and you can always call me. I live on the property in a private separate area.\n'
                            }
                          </span>
                        </div>
                        <div className="flex w-full flex-col items-start gap-2">
                          <span className="w-full whitespace-pre-wrap font-montserrat font-bold">
                            {'Felicity is a Superhost\n'}
                          </span>
                          <span className="text-body font-body w-full whitespace-pre-wrap font-montserrat">
                            {
                              'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.\n'
                            }
                          </span>
                        </div>
                      </div>
                      <div className="flex shrink-0 grow basis-0 items-start gap-6">
                        <div className="flex max-w-[320px] shrink-0 grow basis-0 flex-col items-start gap-4">
                          <span className="text-body font-body font-montserrat">
                            Response rate: 100%
                          </span>
                          <span className="text-body font-body font-montserrat">
                            Response time: within an hour
                          </span>
                          <Button onClick={() => {}}>Contact host</Button>
                          <span className="text-subtext-color">
                            To protect your payment, never transfer money
                            without communicating with owners.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Modals IsOpen={isOpen} setIsOpen={setIsOpen}>
        {/* <Card className="relative max-h-full w-full max-w-2xl p-4"> */}{' '}
        <BookingForm setIsOpen={setIsOpen} rentalId={selectedId || ''} />
        {/* </Card> */}
      </Modals>
      <Modals IsOpen={isRatingOpen} setIsOpen={setIsRatingOpen}>
        {/* <Card className="relative max-h-full w-full max-w-2xl p-4"> */}{' '}
        <StarRatings setIsOpen={setIsRatingOpen} rentalId={rentalId || ''} />
        {/* </Card> */}
      </Modals>
    </>
  );
};

type AvatarProps = {
  image: string;
  altText?: string;
};

export const Avatar = ({ image, altText }: AvatarProps) => {
  return (
    <div className="h-[47.62px] w-[46.84px] rounded-full">
      <img
        src={image}
        alt={altText}
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  );
};

type ListingFeatureProps = {
  icon: string;
  title: string;
  description?: string;
};

export const ListingFeature = ({
  icon,
  title,
  description = '',
}: ListingFeatureProps) => {
  return (
    <div className="flex items-center space-x-4">
      <FontAwesomeIcon
        icon={icon as IconProp}
        className="text-xl text-gray-600"
      />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="text-gray-500">{description}</p>}
      </div>
    </div>
  );
};

type ListingSelectProps = {
  className?: string;
  label: string;
  value: string;
};

export const ListingSelect = ({
  className = '',
  label,
  value,
}: ListingSelectProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className="text-base font-normal text-gray-900">{value}</div>
    </div>
  );
};

type ListingStatProps = {
  icon: string;
  text: string;
};

export const ListingStat = ({ icon, text }: ListingStatProps) => {
  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={icon as IconProp} className="text-secondary" />
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
};

type ListingReviewProps = {
  photo: string;
  name: string;
  location: string;
  date: string;
  desc: string;
  review: string;
};

export const ListingReview = ({
  photo,
  name,
  location,
  date,
  desc,
  review,
}: ListingReviewProps) => {
  return (
    <div className="flex flex-col items-start space-y-4 rounded bg-white p-4 shadow md:flex-row md:space-x-4 md:space-y-0">
      <img
        src={photo}
        alt={name.trim()}
        className="h-16 w-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <div className="mb-2 text-sm text-gray-500">
          <p>{date}</p>
          <p>{desc}</p>
        </div>
        <p className="text-sm text-gray-700">{review}</p>
      </div>
    </div>
  );
};

type ListingsPageDetailProps = {
  className?: string;
  label: string;
  children?: React.ReactNode;
};

export const ListingsPageDetail = ({
  className = '',
  label,
  children,
}: ListingsPageDetailProps) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <span className="text-sm font-semibold text-gray-600">{label}</span>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
};

type LinkButtonProps = {
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  size = 'medium',
  icon = null,
  onClick,
  children,
}) => {
  const sizeClasses = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };

  return (
    <button
      className={`inline-flex items-center space-x-2 rounded bg-blue-600 text-white transition duration-200 hover:bg-blue-700 ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
