import { Card } from 'antd';
// import Image1 from '../../../../../assets/images/card/list-1.jpeg';
// import Image2 from '../../../../../assets/images/card/lists-2.jpeg';
import Image3 from '../../../../../assets/images/card/lists-3.png';
// import Image4 from '../../../../../assets/images/card/listings-4.png';
import { Button } from '@headlessui/react';
import { CarbonCloseFilledIcon } from '@/components/ui/svgs/close-icon';
import { IcBaselineDelete } from '@/components/ui/svgs/delete-icon';
import { EditIcon } from '@/components/ui/svgs/edit-icon';
import { Active, Closed, Drafts, Rejected, Reviewing } from '@/types/api';
import { calculateDaysFromNow } from '@/lib/utils';

// export const myListCardItems = [
//   {
//     id: 1,
//     images: Image4,
//     title: 'Maison Fahrenheit ',
//     price: '212,000,000',
//     location: 'Lekki lagos',
//     reviews: 28,
//     contact: 4,
//     expires: 'Listing will expire in 154 days',
//   },
//   {
//     id: 2,
//     images: Image2,
//     title: 'Olive Gardens',
//     price: '356,000,000',
//     location: 'Lekki lagos',
//     reviews: 12,
//     contact: 2,
//     expires: 'Listing will expire in 154 days',
//   },
//   {
//     id: 3,
//     images: Image3,
//     title: 'Creed Apartment ',
//     price: '212,000,000',
//     location: 'Lekki lagos',
//     reviews: 28,
//     contact: 4,
//     expires: 'Listing will expire in 154 days',
//   },
//   {
//     id: 4,
//     images: Image1,
//     title: 'Creed Apartment ',
//     price: '212,000,000',
//     location: 'Lekki lagos',
//     reviews: 28,
//     contact: 4,
//     expires: 'Listing will expire in 154 days',
//   },
// ];

type MyListingsTabCardProps = {
  listings: Active[] | Drafts[] | Reviewing[] | Rejected[] | Closed[];
};
export const MyListingsTabCard = ({listings}: MyListingsTabCardProps) => {

  if (!listings || listings.length === 0) {
    return <p>No items to display in this category</p>;
  }
  return (
    <>
        {listings.map((listing) => (
             <Card className="mb-[1.63rem] w-full bg-[#D9D9D92B]" key={listing?.id}>
             <div
               className="flex flex-col sm:flex-row md:items-center"
               
             >
               <div className="mr-[1.4rem]">
                 <img
                  //  src={listing?.images[0]?.url}
                   src={Image3}
                   className="h-[10.3rem] w-[13.85rem] rounded-[1.41rem] object-cover"
                   // alt={`${item.images} Images`}
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
                   ₦{listing?.price}
                 </p>
                 <Button className="mb-[0.58rem] rounded-[0.63rem] bg-primary p-[0.6rem] font-raleway text-[0.63rem] font-medium leading-[0.74rem] tracking-[0.03em] text-white backdrop-blur-[10.09px] backdrop-filter">
                   {listing?.address?.nearest_landmark}, {listing?.address.country.name}
                 </Button>
                 <p className="mb-[0.63rem] font-raleway text-[0.87rem] font-[400] leading-[1.02rem] tracking-[0.03em] text-black">
                   {/* {listing?.reviews}  */}
                   0 reviews
                 </p>
                 <p className="font-raleway text-[0.87rem] font-[400] leading-[1.02rem] tracking-[0.03em] text-black">
                   {/* {listing?.owner?.status}  */}
                   0 contact
                 </p>
               </div>
               <div className="flex flex-col">
                 <div className="mb-[0.6rem]">
                   <Button className="flex items-center text-danger-5">
                     <IcBaselineDelete />
                     <span className="ml-1 font-raleway text-[0.73rem] font-[400] leading-[0.85rem] tracking-[0.03em]">
                       Delete
                     </span>
                   </Button>
                 </div>
                 <div className="mb-[0.6rem]">
                   <Button className="flex items-center text-warning">
                     <EditIcon />
                     <span className="ml-1 font-raleway text-[0.73rem] font-[400] leading-[0.85rem] tracking-[0.03em]">
                       Edit
                     </span>
                   </Button>
                 </div>
                 <div>
                   <Button className="flex items-center">
                     <CarbonCloseFilledIcon />
                     <span className="ml-1 font-raleway text-[0.73rem] font-[400] leading-[0.85rem] tracking-[0.03em]">
                       Close
                     </span>
                   </Button>
                 </div>
               </div>
             </div>
           </Card>
        ))}
       
      
    </>
  );
};
