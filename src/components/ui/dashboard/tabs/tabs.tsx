import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { FeaturedRentals } from '../cards';
import { useState } from 'react';
import { useRentals } from '@/features/guest/api/get-rentals';
import { useCategories } from '@/features/category/api/get-category';
import { Rental } from '@/types/api';

export const Tabs = () => {
  const categoryQuery = useCategories();
  const rentalQuery = useRentals();
  const rentals = rentalQuery?.data?.data || [];
  const categories = categoryQuery?.data?.data || [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Merge "All" into categories for the tab display
  const mergedCategories = [{ id: 'all', name: 'All' }, ...categories];

  const filteredRentals =
    selectedIndex === 0
      ? rentals
      : rentals?.filter(
          (rental) =>
            rental?.category?.name.toLowerCase() ===
            mergedCategories[selectedIndex]?.name.toLowerCase(),
        );

  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={(index) => setSelectedIndex(index)}
    >
      <TabList className="grid grid-cols-3 gap-y-2 lg:grid-cols-4">
        {mergedCategories?.slice(0, 3).map((category) => (
          <Tab
            key={category.id}
            className={({ selected }) =>
              `mr-4 h-[3.89rem] overflow-hidden text-ellipsis text-nowrap lg:h-[4.51rem] ${
                selected
                  ? 'bg-primary text-white focus:outline-none'
                  : 'bg-light text-black'
              } rounded-[1.8rem] pb-[1.63rem] pt-[1.6rem] align-middle lg:rounded-[1.93rem] lg:pb-[1.7rem] lg:pl-[1.7rem] lg:pr-[2.3rem] lg:pt-[1.7rem]`
            }
          >
            {category.name}
          </Tab>
        ))}
        <div className="flex items-center text-secondary">
          <select
            onChange={(e) => {
              const selectedCategoryIndex = mergedCategories.findIndex(
                (category) =>
                  category.name.toLowerCase() === e.target.value.toLowerCase(),
              );
              setSelectedIndex(selectedCategoryIndex);
            }}
            className="mr-4 overflow-hidden text-ellipsis text-nowrap rounded-[1.8rem] bg-light px-2 py-[1.3rem] align-middle text-secondary outline-none hover:border-primary hover:bg-primary hover:text-white focus:outline-none lg:w-full lg:rounded-[1.93rem]"
          >
            <option value="all">More</option>
            {categories?.slice(3).map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </TabList>

      {/* <TabPanels className="mt-4">
        <TabPanel>
          <FeaturedRentals rentals={filteredRentals as Rental[]} />
        </TabPanel>
      </TabPanels> */}
      <TabPanels className="mt-4">
        {mergedCategories.map((_, index) => (
          <TabPanel key={index}>
            <FeaturedRentals rentals={filteredRentals as Rental[]} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
