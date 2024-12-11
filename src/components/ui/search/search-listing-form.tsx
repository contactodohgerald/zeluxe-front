import { paths } from '@/config/paths';
import {
  searchRentalsInputSchema,
  useSearchRental,
} from '@/features/guest/api/search-rentals';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from '../form';
import { Button } from '../button';

export const SearchListingForm = () => {
  const navigate = useNavigate();
  const searchListingMutation = useSearchRental();

  const handleSearch = (values: {
    keyword: string;
    category: string;
    location: string;
  }) => {
    const slug = values.category.trim();
    const searchData = {
      keyword: values.keyword.trim(),
      location: values.location.trim(),
    };

    const searchParams = new URLSearchParams(searchData);
    const targetPath = `${paths.search.getHref(slug)}?${searchParams.toString()}`;

    searchListingMutation.mutate(
      {
        data: searchData,
      },
      {
        onSuccess(response) {
          navigate(targetPath, { state: { listings: response?.data } });
        },
      },
    );
  };

  return (
    <>
      <Form
        schema={searchRentalsInputSchema}
        onSubmit={handleSearch}
        className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {({ register, formState }) => (
          <>
            <Input
              placeholder={'What are you looking for'}
              error={formState.errors['keyword']}
              registration={register('keyword')}
              className="h-[calc(1.5rem + 0.75rem + 2px)] block w-full mt-8 rounded-[0.25rem] border border-[#ced4da] bg-white bg-clip-padding px-3  text-[1rem] font-[400] leading-[1.5] text-[#495057] outline-none focus:outline-none"
            />
            <Input
              placeholder="Category"
              error={formState.errors['category']}
              registration={register('category')}
              className="h-[calc(1.5rem + 0.75rem + 2px)]  block w-full rounded-[0.25rem] border border-[#ced4da] bg-white bg-clip-padding px-3  text-[1rem] font-[400] leading-[1.5] text-[#495057] outline-none focus:outline-none"
            />
            <Input
              placeholder="Location"
              error={formState.errors['location']}
              registration={register('location')}
              className="h-[calc(1.5rem + 0.75rem + 2px)] block w-full rounded-[0.25rem] border border-[#ced4da] bg-white bg-clip-padding px-3  text-[1rem] font-[400] leading-[1.5] text-[#495057] outline-none focus:outline-none"
            />
            <div className="col-md-6 items-center">
              <Button
                isLoading={searchListingMutation.isPending}
                type="submit"
                className="btn active h-[calc(1.5rem + 0.75rem + 2px)]  flex w-full rounded-[0.25rem] border-[#1c7430] bg-[#1e7e34] py-[0.375rem] text-[1rem] text-white hover:text-white"
              >
                Search Now
              </Button>
            </div>
          </>
        )}
      </Form>
    </>
  );
};
