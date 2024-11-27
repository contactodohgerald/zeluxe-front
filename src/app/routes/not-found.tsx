import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
// import { Link } from '@/components/ui/link';
import { Link } from 'react-router-dom';
import { paths } from '@/config/paths';

export const NotFoundRoute = () => {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            404 - Not Found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={paths.home.getHref()}
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-success focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              replace
            >
              Go to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
