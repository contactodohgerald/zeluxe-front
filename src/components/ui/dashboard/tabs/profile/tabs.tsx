import {
  Button,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react';
import { Card } from 'antd';
import { ListingsCard, ListingsRowCard, RentalsRowCard } from '../../cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Grid4Icon } from '@/components/ui/svgs/grid4-icon';
import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';
import { Listing, Rental } from '@/types/api';
import clsx from 'clsx';

const tabBtnItems = [
  { id: 1, name: 'Rentals' },
  { id: 2, name: 'Listings' },
  { id: 3, name: 'Sold' },
];

export type ProfileProps = {
  listings: Listing;
  rentals: Rental[];
};
export const ProfileTabs = ({ listings, rentals }: ProfileProps) => {
  const [isTwoColumn, setIsTwoColumn] = useState(true);
  const [activeTab, setActiveTab] = useState(() =>
    localStorage.getItem('activeTab')
      ? Number(localStorage.getItem('activeTab'))
      : 0,
  );

  const toggleColumns = () => setIsTwoColumn((prev) => !prev);

  const renderColumnCards = () =>
    listings?.active?.map((listing) => (
      <ListingsCard key={listing?.id} listing={listing} />
    )) || 'no Active Listing Available';

  const renderRowCards = () =>
    listings?.active.map((listing) => (
      <ListingsRowCard key={listing?.id} listing={listing} />
    )) || 'no Active Listing Available';

  const renderRentalRowCards = () =>
    rentals?.map((rental) => (
      <RentalsRowCard key={rental?.id} rental={rental} />
    )) || 'no Rentals Available';

  const renderEmptyState = (message: string) => {
    <div className="text-center text-secondary">{message}</div>;
  };
  const renderTabContent = (
    renderTwoColumn: Function,
    renderRow: Function,
    isEmpty: boolean,
    message: string,
  ) =>
    isEmpty ? (
      renderEmptyState(message)
    ) : isTwoColumn ? (
      <div className="grid grid-cols-2 gap-x-[1.13rem] gap-y-[0.7rem] sm:grid-cols-3 lg:grid-cols-4">
        {renderTwoColumn()}
      </div>
    ) : (
      <div>{renderRow()}</div>
    );

  const tabClass = (selected: boolean) =>
    clsx(
      'mb-2 h-10 w-20 text-nowrap text-center md:mr-4 md:h-[3.2rem] md:w-[9.88rem] rounded-[9.98rem]',
      selected
        ? 'bg-white text-primary focus:outline-none'
        : 'bg-light text-[#B1B1B1]',
    );

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    localStorage.setItem('activeTab', index.toString());
  };

  return (
    <TabGroup selectedIndex={activeTab} onChange={handleTabChange}>
      <TabList className="">
        <Card className="flex h-[4.99rem] w-full items-center justify-center rounded-[9.91rem] bg-light lg:w-[45rem]">
          {tabBtnItems.map((item) => (
            <Tab
              key={item?.id}
              className={({ selected }) => tabClass(selected)}
            >
              {item?.name}
            </Tab>
          ))}
        </Card>
      </TabList>
      <div className="my-3 flex justify-end gap-2">
        <Button
          onClick={toggleColumns}
          className="flex h-10 w-14 items-center justify-center rounded-[100px] bg-white shadow-md"
        >
          <Grid4Icon className="" />
        </Button>
        <Link
          to={paths.app.addListings.getHref()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary"
        >
          <FontAwesomeIcon icon={faAdd} className="text-white" />
        </Link>
      </div>
      <TabPanels className="my-[2.4rem]">
        <TabPanel>
          <>
            {renderTabContent(
              renderColumnCards,
              renderRentalRowCards,
              rentals.length === 0,
              'No Rentals Available',
            )}
          </>
        </TabPanel>
        <TabPanel>
          <>
            {renderTabContent(
              renderColumnCards,
              renderRowCards,
              listings?.active?.length === 0,
              'No Active Listings Available',
            )}
          </>
        </TabPanel>
        <TabPanel>
          <>
            {renderTabContent(
              renderColumnCards,
              renderRowCards,
              listings?.active?.length === 0,
              'No Active Listings Available',
            )}
          </>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
