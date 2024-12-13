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
import { useEffect, useState } from 'react';
import { Counter } from '@/app/routes/app/owners/listings/add-listing';
import { Button } from '@/components/ui/button';
import { Modals } from '@/components/ui/modals/modal';
import { ModalForm } from '@/components/ui/modals/modal-form';
import { FileUploadComponent } from './file-input';
import { AddAddressForm } from '@/components/ui/modals/add-address-modal';
import { formatErrors } from '@/lib/utils';
import { UploadFile } from 'antd';
import { currencyNGN, cycleItems, listingTypes } from '@/utils/constants';
import {
  createUploadsInputSchema,
  useCreateUpload,
} from '@/features/uploads/api/create-uploads';
import { useCounters } from '@/hooks/useCounters';
import { Spinner } from '@/components/ui/spinner';

export const CreateListing = () => {
  const { addNotification } = useNotifications();
  const [IsOpen, setIsOpen] = useState(false);
  const [IsOpenAddress, setIsOpenAddress] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const uploadFile = useCreateUpload();
  const { counters, addCounter, updateCounter, deleteCounter } = useCounters();
  const categorQuery = useCategories({});
  const addressQuery = useAddress({});
  const categories = categorQuery?.data?.data;
  const address = addressQuery?.data?.data;

  const createListingMutation = useCreateListing({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'Listing created',
        });
      },
      onError: (error) => {
        const formattedErrors = formatErrors(error);
        addNotification({
          type: 'error',
          title: `Validation Error`,
          message: formattedErrors,
        });
      },
    },
  });

  const uploadAllFiles = async () => {
    const filesToUpload = fileList
      .filter((file) => !file.url)
      .map((file) => file.originFileObj as File);

    if (!filesToUpload.length) {
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'No files to upload',
      });
      return;
    }

    const validData = createUploadsInputSchema.parse({
      document: filesToUpload,
    });

    if (fileList.length > 3) {
      uploadFile.mutate(
        { data: validData },
        {
          onSuccess(response) {
            addNotification({
              type: 'success',
              title: 'Success',
              message: 'File uploaded successfully',
            });
            const uploadedFileURL = response?.data?.url;
            const newUploadedImages = [...uploadedImages, uploadedFileURL];

            setUploadedImages(newUploadedImages);
            localStorage.setItem(
              'uploadedImages',
              JSON.stringify(newUploadedImages),
            );
          },
          onError(error) {
            const formatError = formatErrors(error);
            addNotification({
              type: 'error',
              title: 'Validation Error',
              message: formatError,
            });
          },
        },
      );
    }
  };

  useEffect(() => {
    const storedImages = localStorage.getItem('uploadedImages');
    if (storedImages) {
      setUploadedImages(JSON.parse(storedImages));
    }
  }, [setUploadedImages]);

  if (createListingMutation.isPending) {
    return <Spinner size="lg" />;
  }

  return (
    <>
      <Form
        onSubmit={async (values) => {
          await uploadAllFiles();
          const listing_features = counters.map((counter) => ({
            name: counter.label,
            value: counter.count,
          }));
          const listingData = {
            ...values,
            listing_features,
            listing_images: uploadedImages,
          };
          // console.log('listing', uploadedImages);
          createListingMutation.mutate({ data: listingData });
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
              label="Listing Category"
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
            <Select
              className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none md:w-[70%]"
              label="Listing Type"
              error={formState.errors['listing_type']}
              registration={register('listing_type')}
              options={listingTypes.map((listing) => ({
                label: listing.label,
                value: listing.value,
              }))}
            />
            <div className="grid w-full grid-cols-2 gap-x-[1.5rem] md:w-[70%]">
              <Select
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                label="Listing Cycle"
                error={formState.errors['cycle']}
                registration={register('cycle')}
                options={cycleItems.map((cycle) => ({
                  label: cycle.label,
                  value: cycle.value,
                }))}
              />
              <Input
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                type="number"
                label={`Price (${currencyNGN})`}
                placeholder="Enter Price"
                error={formState.errors['price']}
                registration={register('price')}
              />
            </div>

            <div className="relative w-full md:w-[70%]">
              <Select
                label="Listing Address"
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                error={formState.errors['address_id']}
                registration={register('address_id')}
                options={
                  addressQuery.isLoading || !address
                    ? []
                    : address?.map((address) => ({
                        label: `${address.street_no} ${address?.location} ${address.city}, ${address?.zip_code}, ${address?.state?.name} ,${address?.country?.name}  `,
                        value: address?.id,
                      }))
                }
              />
              <FontAwesomeIcon
                icon={faAdd}
                className="absolute left-28 top-1 cursor-pointer text-primary"
                onClick={() => setIsOpenAddress(true)}
              />
            </div>
            <div className="w-full md:w-[70%]">
              <Textarea
                label="Listing Description"
                className="bg-light"
                error={formState.errors['description']}
                registration={register('description')}
              />
            </div>

            <div className="flex w-full flex-col gap-x-[1.5rem] md:flex-row">
              <div>
                <div className="flex gap-2">
                  <p className="mb-1 font-lato text-[0.96rem] font-bold leading-[1.1rem] tracking-[0.03em] text-secondary">
                    Listing Features
                  </p>
                  <FontAwesomeIcon
                    icon={faAdd}
                    className="cursor-pointer text-primary"
                    onClick={() => setIsOpen(true)}
                  />
                </div>
                {counters.map((count, index) => (
                  <Counter
                    key={index}
                    label={count.label}
                    count={count.count}
                    setCount={(value) => updateCounter(index, value)}
                    onDeleteCounter={() => deleteCounter(index)}
                  />
                ))}
              </div>
              <div className="">
                <p className="mb-1 font-lato text-[0.96rem] font-bold leading-[1.1rem] tracking-[0.03em] text-secondary">
                  Listing Images
                </p>

                <div>
                  <FileUploadComponent
                    fileList={fileList}
                    setFileList={setFileList}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <Button
                isLoading={createListingMutation.isPending}
                className="h-[3.4rem] rounded-[0.67rem] bg-primary px-[1.5rem] font-lato text-[1.8rem] font-bold capitalize leading-[2.1rem] tracking-[0.03em] text-white disabled:opacity-0"
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </Form>

      <Modals IsOpen={IsOpen} setIsOpen={setIsOpen}>
        <ModalForm
          IsOpen={IsOpen}
          setIsOpen={setIsOpen}
          onAddCounter={addCounter}
        />
      </Modals>
      <Modals IsOpen={IsOpenAddress} setIsOpen={setIsOpenAddress}>
        <AddAddressForm IsOpen={IsOpenAddress} setIsOpen={setIsOpenAddress} />
      </Modals>
    </>
  );
};
