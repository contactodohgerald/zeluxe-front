import { ContentLayout } from '@/components/layouts';
import { Form, Input } from '@/components/ui/form';
import { registerInputSchema } from '@/lib/auth';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@headlessui/react';
import { Card } from 'antd';
import { useState } from 'react';
export type CounterProps = {
  label: string;
  count: number;
  setCount: (val: number) => void;
};
const Counter = ({ label, count, setCount }: CounterProps) => (
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
  const [count, setCount] = useState({ bedroom: 3, bathroom: 3, balcony: 3 });

  const updateCount = (type: string, value: number) => {
    setCount((prev) => ({
      ...prev,
      [type]: prev[type as keyof typeof prev] + value,
    }));
  };
  return (
    <ContentLayout title="Create a New Listing">
      <Card className="mb-20 mt-2 h-full w-full border bg-white shadow-md">
        <Form
          onSubmit={() => {}}
          className="flex flex-col"
          schema={registerInputSchema}
        >
          {({ register, formState }) => (
            <>
              <Input
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none md:w-[70%]"
                type="text"
                label="Name/Title of Listing"
                placeholder=""
                error={formState.errors['first_name']}
                registration={register('first_name')}
              />
              <Input
                className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none md:w-[70%]"
                type="text"
                label="Listing Type"
                placeholder=""
                error={formState.errors['last_name']}
                registration={register('last_name')}
              />
              <div className="grid w-full grid-cols-2 gap-x-[1.5rem] md:w-[70%]">
                <Input
                  className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                  type="text"
                  label="Listing Cycle"
                  placeholder=""
                  error={formState.errors['first_name']}
                  registration={register('first_name')}
                />
                <Input
                  className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                  type="number"
                  label="Price (#)"
                  placeholder="Enter Price"
                  error={formState.errors['last_name']}
                  registration={register('last_name')}
                />
              </div>

              <div className="grid w-full grid-cols-2 gap-x-[1.5rem] md:w-[70%]">
                <Input
                  className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                  type="text"
                  label="Location of Listing"
                  placeholder=""
                  error={formState.errors['first_name']}
                  registration={register('first_name')}
                />
                <Input
                  className="block h-[3.2rem] w-full rounded-md bg-light px-3 py-3 outline-none focus:outline-none"
                  type="text"
                  label="Address of Listing"
                  placeholder=""
                  error={formState.errors['last_name']}
                  registration={register('last_name')}
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

                    <div className="pt-[3.13rem]">
                      <Button className="h-[3.4rem] w-full rounded-[0.67rem] bg-primary font-lato text-[1.8rem] font-bold capitalize leading-[2.1rem] tracking-[0.03em] text-white md:w-[12rem]">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Form>
      </Card>
    </ContentLayout>
  );
};
