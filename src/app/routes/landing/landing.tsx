import { useState } from 'react';
import { Head } from '@/components/seo';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Link } from 'react-router-dom';
import { Select } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { bookingLinks } from '@/utils/constants';
import { useRentals } from '@/features/guest/api/get-rentals';
import { useStates } from '@/features/states/api/get-states';
import { Spinner } from '@/components/ui/spinner';
import { SearchListingForm } from '@/components/ui/search/search-listing-form';
import { RentalsGridCard } from '@/components/ui/dashboard/cards/rentals-grid-card';
import { Card } from 'antd';

export const LandingRoute = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rentalsQuery = useRentals({});
  const rentals = rentalsQuery?.data?.data;
  const statesQuery = useStates();
  const states = statesQuery?.data?.data;

  // console.log(rentals?.data?.data);

  if (statesQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  if (rentalsQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!rentals || rentals?.length === 0) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center p-12">
        <Card>No items to display in this category</Card>
      </div>
    );
  }

  return (
    <>
      <Head description="Welcome to Zeluxe Listings Home Page" />
      <Header />
      <main>
        <div className="hero-area bg-1 overly text-center">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-md-12 relative">
                <div className="content-block mx-2 md:mx-0">
                  <h1 className="text-[35px] font-bold">
                    Find Your Perfect Stay.
                  </h1>
                  <p className="mx-3 mb-4 text-center text-[20px] md:mx-0">
                    Join the countless individuals who choose to stay and
                    experience <br />
                    the convenience and comfort of our apartments worldwide.
                  </p>
                  {/* <div className="flex justify-center py-24 mt-4 space-x-4"> */}
                  <div className="short-popular-category-list text-center">
                    <ul className="inline-flex space-x-4 pl-0">
                      {bookingLinks.map((icon, idx) => (
                        <Link
                          key={idx}
                          to="#"
                          className="flex items-center space-x-1 border border-[#404040] px-2.5 py-[4px] text-[12px] font-[200] text-[#c1c1c1] hover:underline"
                        >
                          <FontAwesomeIcon
                            //  icon={icons[icon as keyof typeof icons] as IconProp}
                            icon={'fa fa-credit-card' as IconProp}
                          />
                          <span>{icon}</span>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="advance-search mx-8 md:mx-0">
                  <div className="container mx-auto">
                    <SearchListingForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="px-[10px] py-[100px] text-center">
          <h2 className="mb-4 text-[32px] text-black-6">Featured Apartments</h2>
          <div className="container mx-auto">
            <div className="flex flex-wrap border-b pb-4">
              {states?.slice(0, 11).map((state, idx) => (
                <Link
                  key={state?.id}
                  to={''}
                  className={`${activeIndex === idx ? 'text-green-5 underline' : 'text-black-6'} p-4`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {state?.name}
                </Link>
              ))}
              <div className="flex items-center text-gray-700">
                <Select className="explore max-w-[162px] cursor-pointer appearance-none rounded-[0.25rem] border-none bg-[#6c757d] px-[1.75rem] py-[0.375rem] text-white outline-none hover:border-[#545b62] hover:bg-[#5a6268] focus:outline-none">
                  <option>Explore More</option>
                  {states?.slice(11).map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <RentalsGridCard rentals={rentals} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
