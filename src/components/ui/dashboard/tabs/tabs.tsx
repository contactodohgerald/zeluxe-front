import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { FeaturedRentals } from '../cards';
import { useState } from 'react';
import { useRentals } from '@/features/guest/api/get-rentals';
import { useCategories } from '@/features/category/api/get-category';
import { Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Rental } from '@/types/api';

export const Tabs = () => {
  const [dropdowOpen, setDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const categoryQuery = useCategories();
  const rentalQuery = useRentals();
  const rentals = rentalQuery?.data?.data;
  const categories = categoryQuery?.data?.data || [];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const allCategories = categories;
  const mainCategories = allCategories.slice(0, 4);
  const extraCategories = allCategories.slice(5);
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  const filteredRentals =
    selectedCategory === 'All'
      ? rentals
      : rentals?.filter(
          (rental) =>
            rental?.category.name.toLowerCase() ===
            selectedCategory.toLowerCase(),
        );

  console.log('filteredRentals', filteredRentals);
  return (
    <TabGroup>
      <TabList className="grid grid-cols-3 gap-y-2 lg:grid-cols-4">
        {mainCategories?.map((category) => (
          <Tab
            key={category.id}
            onClick={() => handleCategoryChange(category.name)}
            className={({ selected }) =>
              `mr-4 h-[3.89rem] overflow-hidden text-ellipsis text-nowrap lg:h-[4.51rem] ${selected ? 'bg-primary text-white focus:outline-none' : 'bg-light text-black'} rounded-[1.8rem] pb-[1.63rem] pt-[1.6rem] align-middle lg:rounded-[1.93rem] lg:pb-[1.7rem] lg:pl-[1.7rem] lg:pr-[2.3rem] lg:pt-[1.7rem]`
            }
          >
            {category.name}
          </Tab>
        ))}

        {/* "More" Dropdown for extra categories */}
        <Tab
          className={
            `mr-4 h-[2.5rem] lg:mt-4 relative rounded-md outline-none bg-light text-black  align-middle  w-[50px]`
          }
          
        >
          <FontAwesomeIcon
            icon={'fa fa-ellipsis-v' as IconProp}
            onClick={() => setShow(!show)}
          />
          {show
            ? extraCategories.length > 0 && (
                <Select
                  open={dropdowOpen}
                  defaultOpen
                  onChange={handleCategoryChange}
                  onDropdownVisibleChange={() => setDropdownOpen(!dropdowOpen)}
                  title="More"
                  defaultValue={'More'}
                  className="w-[100px] h-[2.5rem] absolute top-0 left-[52px] border-0 border-none bg-light text-secondary outline-none focus:outline-none"
                  options={extraCategories.map((category) => ({
                    value: category.id,
                    label: category.name,
                  }))}
                />
              )
            : null}
        </Tab>
      </TabList>
      <TabPanels className="mt-4">
        <TabPanel>
          <FeaturedRentals rentals={filteredRentals as Rental[]} />
        </TabPanel>
        {/* <TabPanel className="grid grid-cols-1 gap-x-[0.8rem] gap-y-3 sm:grid-cols-2">
          <ApartmentCard apartmentItems={apartmentItems} />
        </TabPanel> */}
      </TabPanels>
    </TabGroup>
  );
};
