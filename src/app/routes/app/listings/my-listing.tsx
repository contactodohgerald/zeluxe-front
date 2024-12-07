import { ContentLayout } from '@/components/layouts';
import { ListingsList } from '@/features/listings/component/listings-list';

export const MyListingRoute = () => {
  const FormSearch = () => (
    <form className="mx-auto max-w-md">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00386 9.47624C7.98808 9.47624 9.5966 7.86771 9.5966 5.8835C9.5966 3.89929 7.98808 2.29077 6.00386 2.29077C4.01965 2.29077 2.41113 3.89929 2.41113 5.8835C2.41113 7.86771 4.01965 9.47624 6.00386 9.47624Z"
              stroke="#1E7E34"
              strokeWidth="1.04516"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5562 11.4356L8.50781 8.60498"
              stroke="#1E7E34"
              strokeWidth="1.04516"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-[3.92px] border-[0.65px] bg-white p-4 ps-10 font-raleway text-sm font-[400] text-secondary outline-none placeholder:text-[0.49rem] placeholder:leading-[0.58rem] placeholder:tracking-[0.03em] placeholder:text-[#B1B1B1] focus:border-primary md:w-[17.3rem]"
          placeholder="Search Listings"
          required
        />
      </div>
    </form>
  );
  return (
    <ContentLayout title="My Listings" component={<FormSearch />}>
      <ListingsList />
    </ContentLayout>
  );
};
