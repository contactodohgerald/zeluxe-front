import { Head } from '@/components/seo';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { SearchListingsCard } from '@/components/ui/search/search-listings-card';
import { useLocation } from 'react-router-dom';

export const SearchListingsRoute = () => {
  const location = useLocation();
  const listings = location.state?.listings || null;

  return (
    <>
      <Head description="Welcome to Zeluxe Listings" />
      <Header />
      <main>
        <div className="container mx-auto px-5 py-8">
          <h1>Search Result 1 of 24</h1>
          <SearchListingsCard listings={listings} />
        </div>
      </main>
      <Footer />
    </>
  );
};
