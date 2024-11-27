import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { ApartmentCard, apartmentItems } from '../cards';

export const Tabs = () => {
  const tabBtnItems = [
    { id: 1, name: 'All' },
    { id: 2, name: 'House' },
    { id: 3, name: 'Apartment' },
    { id: 4, name: 'Villa' },
  ];
  return (
    <TabGroup>
      <TabList className="grid grid-cols-3 gap-y-2 lg:grid-cols-4">
        {tabBtnItems.map((item) => (
          <Tab
            key={item.id}
            className={({ selected }) =>
              `mr-4 h-[3.89rem] lg:h-[4.51rem] ${selected ? 'bg-primary text-white focus:outline-none' : 'bg-light text-black'} rounded-[1.8rem] pb-[1.63rem] pt-[1.6rem] align-middle lg:rounded-[1.93rem] lg:pb-[1.7rem] lg:pl-[1.7rem] lg:pr-[2.3rem] lg:pt-[1.7rem]`
            }
          >
            {item.name}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="mt-4">
        <TabPanel className="grid grid-cols-1 gap-x-[0.8rem] gap-y-3 sm:grid-cols-2">
          <ApartmentCard apartmentItems={apartmentItems} />
        </TabPanel>
        <TabPanel className="grid grid-cols-1 gap-x-[0.8rem] gap-y-3 sm:grid-cols-2">
          <ApartmentCard apartmentItems={apartmentItems} />
        </TabPanel>
        <TabPanel className="grid grid-cols-1 gap-x-[0.8rem] gap-y-3 sm:grid-cols-2">
          <ApartmentCard apartmentItems={apartmentItems} />
        </TabPanel>
        <TabPanel className="grid grid-cols-1 gap-x-[0.8rem] gap-y-3 sm:grid-cols-2">
          <ApartmentCard apartmentItems={apartmentItems} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
