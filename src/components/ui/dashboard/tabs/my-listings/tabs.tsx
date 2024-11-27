import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { MyListingsTabCard } from './my-listings-tab';

export const MyListingsTabs = () => {
  const tabBtnItems = [
    { id: 1, name: 'Active (30)' },
    { id: 2, name: 'Drafts (4) ' },
    { id: 3, name: 'Reviewing (20)' },
    { id: 4, name: 'Rejected (0)' },
    { id: 4, name: 'Closed (0)' },
  ];

  return (
    <TabGroup>
      <TabList className="">
        {tabBtnItems.map((item) => (
          <Tab
            key={item.id}
            className={({ selected }) =>
              `mb-2 mr-4 w-[8.4rem] text-nowrap text-center ${selected ? 'bg-primary text-white focus:outline-none' : 'bg-light text-black'} rounded-[1.66rem] pb-[1.45rem] pl-[1.98rem] pr-[1.98rem] pt-[1.45rem] align-middle`
            }
          >
            {item.name}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="mt-4">
        <TabPanel className="">
          <MyListingsTabCard />
        </TabPanel>
        <TabPanel className="">
          <MyListingsTabCard />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
