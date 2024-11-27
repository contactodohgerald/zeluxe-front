// import { useUser } from '../../../lib/auth';
import ProfileImg from '../../../assets/images/dashboard_profile.jpeg';
import { ContentLayout } from '@/components/layouts';
import { PencilIcon } from '@/components/ui/svgs';
import { Card } from 'antd';
import { ProfileTabs } from '@/components/ui/dashboard/tabs';

const listingItemResults = [
  {
    id: 1,
    item_count: 30,
    type: 'Listing',
  },
  {
    id: 2,
    item_count: 30,
    type: 'Sold',
  },
  {
    id: 3,
    item_count: 30,
    type: 'Reviews',
  },
];
export const ProfileRoute = () => {
  // const user = useUser();

  // if (!user.data) return null;

  return (
    <ContentLayout title="">
      <div className="flex flex-col items-center">
        <div className="">
          <label
            htmlFor="upload"
            className="flex cursor-pointer flex-col items-center gap-2"
          >
            <div className="relative h-[9.7rem] w-[9.7rem] shrink-0 rounded-full object-cover">
              <img
                src={ProfileImg}
                className="h-[9.7rem] w-[9.7rem] rounded-full object-cover"
                alt=""
              />
              <div className="absolute right-0 top-[6.8rem]">
                <PencilIcon />
              </div>
            </div>
          </label>
          <input id="upload" type="file" className="hidden" />
        </div>
        <div className="mt-[0.97rem] text-center">
          <h4 className="font-lato text-[1.36rem] font-bold leading-[1.63rem] tracking-[0.03em] text-primary">
            Femi Ademola
          </h4>
          <p className="font-lato text-[0.97rem] font-semibold leading-[1.2rem] tracking-[0.03em] text-primary">
            ademolaoluwafemi342@gmail.com
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
          <ProfileTabs />
        </div>
      </div>
    </ContentLayout>
  );
};
