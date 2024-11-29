import { ContentLayout } from '@/components/layouts';

import { CreateListing } from '@/features/listings/component/create-listings';

import { Button } from '@headlessui/react';
import { Card } from 'antd';
export type CounterProps = {
  label: string;
  count: number;
  setCount: (val: number) => void;
};
export const Counter = ({ label, count, setCount }: CounterProps) => (
  <div className="mb-[0.87rem] flex h-[3.2rem] w-[18.89rem] items-center justify-between rounded-md bg-light px-3 py-3">
    <p className="font-lato text-[0.7rem] font-semibold leading-[0.83rem] tracking-[0.03em]">
      {label}
    </p>
    <div className="flex w-[6.1rem] items-center justify-center">
      <Button
        onClick={() => setCount(-1)}
        className="h-[1.73rem] w-[1.73rem] rounded-[0.52rem] bg-[#333333A6] text-white"
      >
        -
      </Button>
      <p className="w-[2.64rem] text-center">{count}</p>
      <Button
        onClick={() => setCount(1)}
        className="h-[1.73rem] w-[1.73rem] rounded-[0.52rem] bg-[#4B6D53A6] text-white"
      >
        +
      </Button>
    </div>
  </div>
);

export const AddListingRoute = () => {
  return (
    <ContentLayout title="Create a New Listing">
      <Card className="mb-20 mt-2 h-full w-full border bg-white shadow-md">
        <CreateListing />
      </Card>
    </ContentLayout>
  );
};
