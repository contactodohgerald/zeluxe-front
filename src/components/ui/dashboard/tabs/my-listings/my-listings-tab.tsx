import { Card } from 'antd';
import Image3 from '../../../../../assets/images/card/lists-3.png';
import { CarbonCloseFilledIcon } from '@/components/ui/svgs/close-icon';
import { IcBaselineDelete } from '@/components/ui/svgs/delete-icon';
import { EditIcon } from '@/components/ui/svgs/edit-icon';
import { Active, Closed, Drafts, Rejected, Reviewing } from '@/types/api';
import { calculateDaysFromNow, formatErrors } from '@/lib/utils';
import { usePublishListing } from '@/features/listings/owners/api/publish-listing';
import { useNotifications } from '@/components/ui/notifications';
import { useDeleteListing } from '@/features/listings/owners/api/delete-listing';
import { useCloseListing } from '@/features/listings/owners/api/close-listing';
import { paths } from '@/config/paths';
import { Link } from 'react-router-dom';
import { Authorization, ROLES } from '@/lib/authorization';
import { useApproveListing } from '@/features/listings/admin/api/approve-listing';
import { Button } from '@/components/ui/button';
import { useRejectListing } from '@/features/listings/admin/api/reject-listing';

type MyListingsTabCardProps = {
  listings: Active[] | Drafts[] | Reviewing[] | Rejected[] | Closed[];
};
export const MyListingsTabCard = ({ listings }: MyListingsTabCardProps) => {
  const { addNotification } = useNotifications();
  const publish = usePublishListing({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'Listing published successfully',
        });
      },
      onError: (error) => {
        const formattedErrors = formatErrors(error);
        addNotification({
          type: 'error',
          title: error?.message,
          message: formattedErrors,
        });
      },
    },
  });
  const approve = useApproveListing({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'Listing approved successfully',
        });
      },
      onError: (error) => {
        const formattedErrors = formatErrors(error);
        addNotification({
          type: 'error',
          title: error?.message,
          message: formattedErrors,
        });
      },
    },
  });

  const deleteListing = useDeleteListing({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'success',
          message: 'Listing Deleted successfully',
        });
      },
      onError: (error) => {
        const formattedErrors = formatErrors(error);
        addNotification({
          type: 'error',
          title: error?.message,
          message: formattedErrors,
        });
      },
    },
  });
  const closeListing = useCloseListing({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'success',
          message: 'Listing Closed successfully',
        });
      },
      onError: (error) => {
        const formattedErrors = formatErrors(error);
        addNotification({
          type: 'error',
          title: error?.message,
          message: formattedErrors,
        });
      },
    },
  });
  const rejectListing = useRejectListing({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'success',
          message: 'Listing Rejected successfully',
        });
      },
      onError: (error) => {
        const formattedErrors = formatErrors(error);
        addNotification({
          type: 'error',
          title: error?.message,
          message: formattedErrors,
        });
      },
    },
  });

  const handlePlublishListing = (id: string) => {
    publish.mutate({ listingId: id });
  };
  const handleApproveListing = (id: string) => {
    approve.mutate({ listingId: id });
  };
  const handleDeleteListing = (id: string) => {
    deleteListing.mutate({ listingId: id });
  };
  const handleCloseListing = (id: string) => {
    closeListing.mutate({ listingId: id });
  };
  const handleRejectListing = (id: string) => {
    rejectListing.mutate({ listingId: id });
  };

  if (!listings || listings.length === 0) {
    return <p>No items to display in this category</p>;
  }

  return (
    <>
      {listings.map((listing) => (
        <Card className="mb-[1.63rem] w-full bg-[#D9D9D92B]" key={listing?.id}>
          <div className="flex flex-col sm:flex-row md:items-center">
            <div className="mr-[1.4rem]">
              <img
                src={listing?.images[0]?.url || Image3}
                className="h-[10.3rem] max-w-[13.85rem] rounded-[1.41rem] object-cover"
                alt={'Listing Images'}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = Image3;
                }}
              />
              <p className="font-raleway text-[1.02rem] font-[400] leading-[2.2rem] -tracking-[0.02em] text-[#0000007A]">
                Listing will expire in {calculateDaysFromNow(listing?.duration)}
              </p>
            </div>
            <div className="flex-grow">
              <h4 className="mb-[0.63rem] font-raleway text-[1.5rem] font-bold leading-[1.8rem] tracking-[0.03em] text-secondary">
                {listing.name}
              </h4>
              <p className="mb-[0.63rem] font-montserrat text-[1.1rem] font-semibold leading-[1.32rem] tracking-[0.03em] text-primary">
                ₦{Number(listing?.price)}
              </p>
              <Button className="mb-[0.58rem] rounded-[0.63rem] bg-primary bg-transparent p-[0.6rem] font-raleway text-[0.63rem] font-medium leading-[0.74rem] tracking-[0.03em] text-white shadow-none backdrop-blur-[10.09px] backdrop-filter">
                {listing?.address?.nearest_landmark},{' '}
                {listing?.address.country.name}
              </Button>
              <p className="mb-[0.63rem] font-raleway text-[0.87rem] font-[400] leading-[1.02rem] tracking-[0.03em] text-black">
                {/* {listing?.reviews}  */}0 reviews
              </p>
              <p className="font-raleway text-[0.87rem] font-[400] leading-[1.02rem] tracking-[0.03em] text-black">
                {/* {listing?.owner?.status}  */}0 contact
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-[0.6rem]">
                <Button
                  onClick={() => handleDeleteListing(listing.id)}
                  className="flex items-center bg-transparent text-danger-5 shadow-none"
                >
                  <IcBaselineDelete />
                  <span className="ml-1 font-raleway text-[0.73rem] font-[400] leading-[0.85rem] tracking-[0.03em]">
                    Delete
                  </span>
                </Button>
              </div>
              {listing.status !== 'active' ? (
                <div className="mb-[0.6rem]">
                  <Link
                    to={paths.app.listing.getHref(listing?.id)}
                    className="flex items-center text-warning"
                  >
                    <EditIcon className="md:ml-4" />
                    <span className="ml-1 font-raleway text-[0.73rem] font-[400] leading-[0.85rem] tracking-[0.03em]">
                      Edit
                    </span>
                  </Link>
                </div>
              ) : null}
              <div>
                <Button
                  onClick={() => handleCloseListing(listing.id)}
                  className="flex items-center bg-transparent text-secondary shadow-none"
                >
                  <CarbonCloseFilledIcon />
                  <span className="ml-1 font-raleway text-[0.73rem] font-[400] leading-[0.85rem] tracking-[0.03em]">
                    Close
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="text-right">
            {listing.status === 'draft' ? (
              <Button
                isLoading={publish.isPending}
                onClick={() => handlePlublishListing(listing.id)}
                className="rounded-md bg-success p-1 font-raleway font-bold text-white"
              >
                publish
              </Button>
            ) : (
              ''
            )}
          </div>
          <Authorization allowedRoles={[ROLES.admin]}>
            <div className="text-right">
              <div className="flex gap-x-3">
                <div>
                  {listing.status === 'review' ? (
                    <Button
                      isLoading={approve.isPending}
                      onClick={() => handleApproveListing(listing.id)}
                      className="rounded-md bg-success p-1 font-raleway font-bold text-white"
                    >
                      Approve
                    </Button>
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  {listing.status === 'review' ? (
                    <Button
                      isLoading={rejectListing.isPending}
                      onClick={() => handleRejectListing(listing.id)}
                      className="rounded-md bg-danger p-1 font-raleway font-bold text-white"
                    >
                      Reject
                    </Button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </Authorization>
        </Card>
      ))}
    </>
  );
};
