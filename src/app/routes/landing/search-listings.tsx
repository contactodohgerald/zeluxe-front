import { Head } from '@/components/seo';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { Pagination } from '@/components/ui/pagination/use-pagination';
import { SearchListingsCard } from '@/components/ui/search/search-listings-card';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const SearchListingsRoute = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const location = useLocation();
  const listings = location.state?.listings || null;
  const currentListings = listings?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const totalEntries = listings?.length || 0;

  return (
    <>
      <Head description="Welcome to Zeluxe Listings" />
      <Header />
      <main>
        <div className="container mx-auto px-5 py-8">
          <div className="mb-[15px] mt-5 w-full rounded-[3.92px] border border-light bg-[#F9F9F9] px-5 py-[11.25px]">
            <Pagination
              currentPage={currentPage}
              totalEntries={totalEntries}
              pageSize={pageSize}
              onPageChange={setCurrentPage}
            />
          </div>
          <SearchListingsCard listings={currentListings} />
        </div>
      </main>
      <Footer />
    </>
  );
};
