import { ContentLayout } from '@/components/layouts';
import { ListingsCard } from '@/components/ui/dashboard/cards/listings-card';
import { Form, Input } from '@/components/ui/form';
import { useUser } from '@/lib/auth';
import { Tabs } from '@/components/ui/dashboard/tabs';
import { SearchIcon } from '@/components/ui/svgs/search-icon';
import { useListings } from '@/features/listings/owners/api/get-listings';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  searchRentalsInputSchema,
  useSearchRental,
} from '@/features/guest/api/search-rentals';
import { paths } from '@/config/paths';

export const DashboardRoute = () => {
  const user = useUser();
  const listingQuery = useListings();
  const listings = listingQuery?.data?.data;
  const navigate = useNavigate();
  const searchMutation = useSearchRental();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const handleSearch = (values: { keyword: string }) => {
    const searchData = { keyword: values.keyword };

    searchMutation.mutate(
      {
        data: searchData,
      },
      {
        onSuccess(response) {
          navigate(
            `${redirectTo ? `${redirectTo}` : paths.app.search.getHref()}`,
            { state: { rentals: response?.data } },
          );
        },
      },
    );
  };

  return (
    <ContentLayout title="">
      <div className="flex flex-col justify-center pb-20 lg:flex-row">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex-1">
            <h1 className="font-lato text-[2.3rem] font-medium leading-[3.68rem] tracking-[3%] text-primary">
              Hey, <span className="font-bold">{user?.data?.first_name}!</span>
            </h1>
            <p className="font-lato text-[2.3rem] font-medium leading-[3.68rem] tracking-[3%] text-primary">
              Let's start exploring
            </p>

            <div>
              <Form
                schema={searchRentalsInputSchema}
                onSubmit={handleSearch}
                className="flex items-center"
              >
                {({ register, formState, watch }) => (
                  <>
                    <label htmlFor="voice-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon
                          onClick={() =>
                            handleSearch({ keyword: watch('keyword') })
                          }
                          className="h-[1.1rem] w-[1.1rem] cursor-pointer text-primary"
                        />
                      </div>
                      <Input
                        registration={register('keyword')}
                        error={formState.errors['keyword']}
                        type="text"
                        id="voice-search"
                        className="block w-full rounded-[0.32rem] border-[0.1px] border-none border-primary bg-light bg-transparent p-2.5 py-[0.92rem] pl-10 font-raleway text-sm text-secondary shadow-none outline-none outline-primary placeholder:text-[#B1B1B1] focus:border-primary focus:ring-primary"
                        placeholder="Search House, Apartment, etc"
                        required
                        style={{
                          backgroundColor: 'transparent',
                          border: '0 !important',
                        }}
                      />
                      <div className="absolute inset-y-2 right-20 h-[30.77px] border-r border-[#A1A5C1]" />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-[20.06px] ml-[24.95px] flex items-center pr-[20.06px]"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </Form>
            </div>

            {/* Tab */}
            <div className="mt-3">
              <Tabs />
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:pl-[5.94rem]">
            <div className="mb-[1.5rem]">
              <p className="font-lato text-[1.35rem] font-medium leading-[25.82px] tracking-[3%] text-primary">
                Explore Nearby Listings
              </p>
            </div>
            <div className="mb:mt-0 mt-4 grid grid-cols-2 gap-x-[8.37px] gap-y-[11.96px] sm:grid-cols-3 lg:grid-cols-2">
              {listings?.active.map((listing) => (
                <ListingsCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
