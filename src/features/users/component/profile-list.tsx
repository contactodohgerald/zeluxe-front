import { useUser } from '@/lib/auth';
import { Card } from 'antd';
import { PencilIcon } from '@/components/ui/svgs';
import { ProfileTabs } from '@/components/ui/dashboard/tabs';
import ProfileImg from '../../../assets/images/dashboard_profile.jpeg';
import {
  createUploadsInputSchema,
  useCreateUpload,
} from '@/features/uploads/api/create-uploads';
import { useEffect, useState } from 'react';
import { useNotifications } from '@/components/ui/notifications';
import { formatErrors, onError } from '@/lib/utils';
import { useListings } from '@/features/listings/api/get-listings';
import { useRentalReviews } from '@/features/reviews/api/get-reviews';
import { useRentals } from '@/features/guest/api/get-rentals';
import { Listing, Rental } from '@/types/api';

export const ProfileList = () => {
  const { addNotification } = useNotifications();
  const [uploadedImages, setUploadedImages] = useState<string | null>(null);
  const user = useUser();
  const uploadFiles = useCreateUpload();
  const listingQuery = useListings();
  const reviewQuery = useRentalReviews();
  const rentalQuery = useRentals();
  const listings = listingQuery?.data?.data;
  const reviews = reviewQuery?.data?.data;
  const rentals = rentalQuery?.data?.data;
  const reviewsCount = reviews?.length;
  const listingsCount = listings?.active.length;
  const listingItemResults = [
    {
      id: 1,
      item_count: listingsCount,
      type: 'Listing',
    },
    {
      id: 2,
      item_count: 30,
      type: 'Sold',
    },
    {
      id: 3,
      item_count: reviewsCount,
      type: 'Reviews',
    },
  ];
  useEffect(() => {
    if (user?.data?.avatar) {
      setUploadedImages(user.data.avatar);
    }
  }, [user]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);
    setUploadedImages(previewURL);

    const validData = createUploadsInputSchema.parse({
      document: [file],
    });

    uploadFiles.mutate(
      { data: validData },
      {
        onSuccess(response) {
          addNotification({
            type: 'success',
            title: 'success',
            message: 'Image uploaded successfully',
          });

          const uploadedFileURL = response?.data?.url;
          setUploadedImages(uploadedFileURL);
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
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="">
          <label
            htmlFor="upload"
            className="flex cursor-pointer flex-col items-center gap-2"
          >
            <div className="relative h-[9.7rem] w-[9.7rem] shrink-0 rounded-full object-cover">
              <img
                src={uploadedImages || ProfileImg}
                className="h-[9.7rem] w-[9.7rem] rounded-full object-cover"
                alt="Profile Image"
                onError={(e) => onError(e, ProfileImg)}
              />
              <div className="absolute right-0 top-[6.8rem]">
                <PencilIcon />
              </div>
            </div>
          </label>
          <input
            id="upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
        <div className="mt-[0.97rem] text-center">
          <h4 className="font-lato text-[1.36rem] font-bold leading-[1.63rem] tracking-[0.03em] text-primary">
            {user?.data?.first_name} {user?.data?.last_name}
          </h4>
          <p className="font-lato text-[0.97rem] font-semibold leading-[1.2rem] tracking-[0.03em] text-primary">
            {user?.data?.email}
          </p>
        </div>
        <div className="mt-3 flex gap-2">
          {listingItemResults.map((item) => (
            <Card
              key={item.id}
              className="flex h-[5.94rem] w-[6.68rem] flex-col items-center justify-center rounded-[1.53rem] border-[1.36px] border-[#ECEDF3] md:w-[8.68rem]"
            >
              <h6 className="text-center text-[1.2rem] font-bold leading-[1.43rem] tracking-[0.03em] text-primary">
                {item.item_count}
              </h6>
              <p className="text-center font-lato text-[0.85rem] font-medium leading-[1.02rem] tracking-[0.03em] text-primary">
                {item.type}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-4 text-center">
          <ProfileTabs
            rentals={rentals as Rental[]}
            listings={listings as Listing}
          />
        </div>
      </div>
    </>
  );
};
