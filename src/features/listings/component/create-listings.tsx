import { useNotifications } from '@/components/ui/notifications';
import {
  createListingInputSchema,
  useCreateListing,
} from '../api/create-listing';
import { Form, Input, Textarea } from '@/components/ui/form';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCategories } from '@/features/category/api/get-category';
import { useAddress } from '@/features/address/api/get-address';
import { Select } from '@/components/ui/form/select';
import { useState } from 'react';
import { Counter } from '@/app/routes/app/add-listing';
import { Button } from '@/components/ui/button';

export const CreateListing = () => {
  const [count, setCount] = useState({ bedroom: 3, bathroom: 3, balcony: 3 });

  const updateCount = (type: string, value: number) => {
    setCount((prev) => ({
      ...prev,
      [type]: prev[type as keyof typeof prev] + value,
    }));
  };
  const categorQuery = useCategories({});
  const addressQuery = useAddress({});
  const categories = categorQuery?.data?.data;
  const address = addressQuery?.data?.data;
  const { addNotification } = useNotifications();

  const createListingMutation = useCreateListing({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'Listing created',
        });
      },
      onError: () => {
        addNotification({
          type: 'error',
          title: 'Oops Something went wrong.',
        });
      },
    },
  });

  return (
    <>
      <Form
        onSubmit={() => {
        }}
        className="flex flex-col"
        schema={createListingInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Input
              className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none md:w-[70%]"
              type="text"
              label="Name/Title of Listing"
              placeholder=""
              error={formState.errors['name']}
              registration={register('name')}
            />
            <Select
              label="Listing Type"
              className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none md:w-[70%]"
              error={formState.errors['category_id']}
              registration={register('category_id')}
              options={
                categorQuery.isLoading || !categories
                  ? []
                  : categories.map((category) => ({
                      label: category?.name,
                      value: category?.id,
                    }))
              }
            />
            {/* <Input
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none md:w-[70%]"
                type="text"
                label="Listing Type"
                placeholder=""
                error={formState.errors['last_name']}
                registration={register('last_name')}
              /> */}
            <div className="grid w-full grid-cols-2 gap-x-[1.5rem] md:w-[70%]">
              <Input
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                type="text"
                label="Listing Cycle"
                placeholder=""
                // error={formState.errors['']}
                // registration={register('first_name')}
              />
              <Input
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                type="number"
                label="Price (#)"
                placeholder="Enter Price"
                error={formState.errors['price']}
                registration={register('price')}
              />
            </div>

            <div className="grid w-full grid-cols-2 gap-x-[1.5rem] md:w-[70%]">
              <Input
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                type="text"
                label="Location of Listing"
                placeholder=""
                // error={formState.errors['first_name']}
                // registration={register('first_name')}
              />
              <Select
                label="Listing Address"
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none md:w-[70%]"
                error={formState.errors['address_id']}
                registration={register('address_id')}
                options={
                  addressQuery.isLoading || !address
                    ? []
                    : address?.map((address) => ({
                        label: address?.location,
                        value: address?.id,
                      }))
                }
              />
            </div>
            <div className="grid w-full grid-cols-2 gap-x-[1.5rem] md:w-[70%]">
              <Textarea
                label="Listing Description"
                className="bg-light"
                error={formState.errors['description']}
                registration={register('description')}
              />
            </div>

            <div className="flex w-full flex-col gap-x-[1.5rem] md:flex-row">
              <div>
                <p className="mb-1 font-lato text-[0.96rem] font-bold leading-[1.1rem] tracking-[0.03em] text-secondary">
                  Listing Features
                </p>
                <Counter
                  label="Bedroom"
                  count={count.bedroom}
                  setCount={(value) => updateCount('bedroom', value)}
                />
                <Counter
                  label="Bathroom"
                  count={count.bathroom}
                  setCount={(value) => updateCount('bathroom', value)}
                />
                <Counter
                  label="Balcony"
                  count={count.balcony}
                  setCount={(value) => updateCount('balcony', value)}
                />
              </div>

              <div className="">
                <p className="mb-1 font-lato text-[0.96rem] font-bold leading-[1.1rem] tracking-[0.03em] text-secondary">
                  Listing Images
                </p>
                <div className="mb-3 grid grid-cols-2 gap-x-[1.4rem] gap-y-[0.88rem]">
                  <div className="flex h-[6.5rem] w-[9.8rem] flex-col items-center justify-center rounded-[0.67rem] bg-light">
                    <label
                      htmlFor="upload"
                      className="cursor-pointer px-[0.94rem]"
                    >
                      <p className="font-lato text-[1.02rem] font-bold leading-[1.2rem] tracking-[0.03em] text-[#28282830]">
                        {' '}
                        Click to Upload an Image
                      </p>
                    </label>
                    <input id="upload" type="file" className="hidden" />
                  </div>

                  <div className="flex h-[6.5rem] w-[9.8rem] flex-col items-center justify-center rounded-[0.67rem] bg-light">
                    <label
                      htmlFor="upload"
                      className="cursor-pointer px-[0.94rem]"
                    >
                      <FontAwesomeIcon
                        icon={faAdd}
                        className="font-lato text-[4.4rem] font-bold leading-[1.2rem] tracking-[0.03em] text-[#28282830]"
                      />
                    </label>
                    <input id="upload" type="file" className="hidden" />
                  </div>

                  <div className="flex h-[6.5rem] w-[9.8rem] flex-col items-center justify-center rounded-[0.67rem] bg-light">
                    <label
                      htmlFor="upload"
                      className="cursor-pointer px-[0.94rem]"
                    >
                      <FontAwesomeIcon
                        icon={faAdd}
                        className="font-lato text-[4.4rem] font-bold leading-[1.2rem] tracking-[0.03em] text-[#28282830]"
                      />
                    </label>
                    <input id="upload" type="file" className="hidden" />
                  </div>
                  <div className="flex h-[6.5rem] w-[9.8rem] flex-col items-center justify-center rounded-[0.67rem] bg-light">
                    <label
                      htmlFor="upload"
                      className="cursor-pointer px-[0.94rem]"
                    >
                      <FontAwesomeIcon
                        icon={faAdd}
                        className="font-lato text-[4.4rem] font-bold leading-[1.2rem] tracking-[0.03em] text-[#28282830]"
                      />
                    </label>
                    <input id="upload" type="file" className="hidden" />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <Button isLoading={createListingMutation.isPending} className="h-[3.4rem] rounded-[0.67rem] bg-primary font-lato text-[1.8rem] font-bold capitalize leading-[2.1rem] tracking-[0.03em] text-white px-[1.5rem]">
                Submit
              </Button>
            </div>
          </>
        )}
      </Form>
    </>
  );
};
