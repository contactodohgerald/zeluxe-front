import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { MyListingsTabCard } from './my-listings-tab';
import { Listing } from '@/types/api';

export const MyListingsTabs = ({listings}:{listings:Listing}) => {
  if(!listings || Object.keys(listings).length === 0) {
    return <p>No listings available</p>
  }
  return (
    <TabGroup>
      <TabList className="">
        {Object.keys(listings).map((item) => (
          <Tab
            key={item}
            className={({ selected }) =>
              `mb-2 mr-4 w-[8.4rem] text-nowrap capitalize text-center ${selected ? 'bg-primary text-white focus:outline-none' : 'bg-light text-black'} rounded-[1.66rem] pb-[1.45rem] pl-[1.98rem] pr-[1.98rem] pt-[1.45rem] align-middle`
            }
          >
            {item}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="mt-4">
        {Object.keys(listings).map((key)=>(
           <TabPanel className="" key={key}>
           <MyListingsTabCard listings={listings[key as keyof Listing] as any}/>
         </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
