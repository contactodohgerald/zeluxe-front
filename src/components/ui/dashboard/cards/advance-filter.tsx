import { Card } from 'antd';
import { Form, Input } from '@/components/ui/form';
import {
  filterRentalInputSchema,
  useFilterRental,
} from '@/features/guest/api/filter-rentals';
import { useNotifications } from '../../notifications';
import { formatErrors } from '@/lib/utils';
import { Button } from '../../button';
import { Spinner } from '../../spinner';

export const AdvanceFilter = () => {
  const { addNotification } = useNotifications();
  const filterRentalMutation = useFilterRental({
    mutationConfig: {
      onSuccess(response) {
        addNotification({
          type: 'success',
          title: 'success',
          message: 'My rentals retrieved',
        });
        // console.log('data',response?.data)
        // console.log('length',response?.data?.length)
      },
      onError(error) {
        const formatError = formatErrors(error);
        addNotification({
          type: 'error',
          title: 'Failure',
          message: formatError,
        });
      },
    },
  });

  if (filterRentalMutation.isPaused) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <Card className="rounded-[1.4rem] bg-[#f9f9f9] p-[1.3rem] shadow-filter">
      <div className="mb-2">
        <h3 className="text-center font-lato text-[1.3rem] font-bold leading-[1.53rem] tracking-[0.03em] text-primary">
          Advanced Filter Options
        </h3>
      </div>
      <Form
        onSubmit={(values) => {
          filterRentalMutation.mutate({ data: values });
        }}
        schema={filterRentalInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Input
              className="h-[3.2rem] w-full rounded-md bg-white px-3 py-3 font-lato text-[0.96rem] font-bold leading-[1.2rem] tracking-[0.03em] text-secondary outline-none focus:outline-none"
              type="text"
              label="Location"
              error={formState.errors['location']}
              registration={register('location')}
            />
            <Input
              className="h-[3.2rem] w-full rounded-md bg-white px-3 py-3 font-lato text-[0.96rem] font-bold leading-[1.2rem] tracking-[0.03em] text-secondary outline-none focus:outline-none"
              type="text"
              label="Category"
              error={formState.errors['category']}
              registration={register('category')}
            />
            <div className="flex gap-x-[2.88rem]">
              {/* <Input
                className="h-[3.2rem] w-full rounded-md bg-white px-3 py-3 font-lato text-[0.96rem] font-bold leading-[1.2rem] tracking-[0.03em] text-secondary outline-none focus:outline-none"
                type="text"
                label="Type"
                error={formState.errors['email']}
                registration={register('email')}
              /> */}
              <Input
                className="h-[3.2rem] w-full rounded-md bg-white px-3 py-3 font-lato text-[0.96rem] font-bold leading-[1.2rem] tracking-[0.03em] text-secondary outline-none focus:outline-none"
                type="text"
                label="Bedrooms"
                error={formState.errors['bedrooms']}
                registration={register('bedrooms')}
              />
            </div>
            <div className="flex gap-x-[2.88rem]">
              <Input
                className="h-[3.2rem] w-full rounded-md bg-white px-3 py-3 font-lato text-[0.96rem] font-bold leading-[1.2rem] tracking-[0.03em] text-secondary outline-none focus:outline-none"
                type="text"
                label="Min Price"
                error={formState.errors['min_price']}
                registration={register('min_price')}
              />
              <Input
                className="h-[3.2rem] w-full rounded-md bg-white px-3 py-3 font-lato text-[0.96rem] font-bold leading-[1.2rem] tracking-[0.03em] text-secondary outline-none focus:outline-none"
                type="text"
                label="Max Price"
                error={formState.errors['max_price']}
                registration={register('max_price')}
              />
            </div>
            <Input
              className="h-[3.2rem] w-full rounded-md bg-white px-3 py-3 font-lato text-[0.96rem] font-bold leading-[1.2rem] tracking-[0.03em] text-secondary outline-none focus:outline-none"
              type="text"
              label="Keywords"
              placeholder=""
              error={formState.errors['keyword']}
              registration={register('keyword')}
            />
            <Button
              type="submit"
              isLoading={filterRentalMutation.isPending}
              className="block h-[2.68rem] w-full rounded-[0.4rem] bg-primary py-2 font-lato text-[0.96rem] font-bold leading-[1.2rem] tracking-[0.03em] text-white outline-none focus:outline-none data-[active]:bg-primary data-[hover]:bg-primary"
            >
              Search
            </Button>
          </>
        )}
      </Form>
    </Card>
  );
};
