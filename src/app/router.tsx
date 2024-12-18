import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { paths } from '@/config/paths';
import { useMemo } from 'react';
import { AppRoot, AppRootErrorBoundary } from './routes/app/root';
import { ProtectedRoute } from '@/lib/auth';
import { ErrorBoundary } from './routes/error';

export const createAppRouter = (_queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing/landing');
        return { Component: LandingRoute };
      },
      errorElement: <ErrorBoundary />,
    },
    {
      path: paths.homeDetail.path,
      lazy: async () => {
        const { LandingDetailRoute } = await import('./routes/landing/detail');
        return { Component: LandingDetailRoute };
      },
      errorElement: <ErrorBoundary />,
    },
    {
      path: paths.search.path,
      lazy: async () => {
        const { SearchListingsRoute } = await import(
          './routes/landing/search-listings'
        );
        return { Component: SearchListingsRoute };
      },
    },
    {
      path: paths.about.path,
      lazy: async () => {
        const { AboutRoute } = await import('./routes/landing/about');
        return { Component: AboutRoute };
      },
    },
    {
      path: paths.contact.path,
      lazy: async () => {
        const { ContactRoute } = await import('./routes/landing/contact-us');
        return { Component: ContactRoute };
      },
    },
    {
      path: paths.privacy.path,
      lazy: async () => {
        const { PrivacyRoute } = await import('./routes/landing/privacy');
        return { Component: PrivacyRoute };
      },
    },
    {
      path: paths.terms.path,
      lazy: async () => {
        const { TermsRoute } = await import('./routes/landing/terms');
        return { Component: TermsRoute };
      },
    },
    {
      path: paths.auth.chooseAccount.path,
      lazy: async () => {
        const { ChooseAccountRoute } = await import(
          './routes/auth/choose-account'
        );
        return { Component: ChooseAccountRoute };
      },
    },
    {
      path: paths.auth.renter.path,
      lazy: async () => {
        const { RegisterRoute } = await import('./routes/auth/register');
        return { Component: RegisterRoute };
      },
    },
    {
      path: paths.auth.owner.path,
      lazy: async () => {
        const { RegisterOwnerRoute } = await import(
          './routes/auth/register-owner'
        );
        return { Component: RegisterOwnerRoute };
      },
    },
    {
      path: paths.auth.verify.path,
      lazy: async () => {
        const { VerifyOtpRoute } = await import('./routes/auth/verify-otp');
        return { Component: VerifyOtpRoute };
      },
    },
    {
      path: paths.auth.login.path,
      lazy: async () => {
        const { LoginRoute } = await import('./routes/auth/login');
        return { Component: LoginRoute };
      },
    },
    {
      path: paths.auth.passwordReset.path,
      lazy: async () => {
        const { PasswordResetRoute } = await import(
          './routes/auth/password-reset'
        );
        return { Component: PasswordResetRoute };
      },
    },
    {
      path: paths.app.root.path,
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          path: paths.app.ownerDashboard.path,
          lazy: async () => {
            const { DashboardRoute } = await import(
              './routes/app/owners/dashboard'
            );
            return {
              Component: DashboardRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.adminDashboard.path,
          lazy: async () => {
            const { AdminDashboardRoute } = await import(
              './routes/app/admin/dashboard'
            );
            return {
              Component: AdminDashboardRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.addListings.path,
          lazy: async () => {
            const { AddListingRoute } = await import(
              './routes/app/owners/listings/add-listing'
            );
            return {
              Component: AddListingRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.myListings.path,
          lazy: async () => {
            const { MyListingRoute } = await import(
              './routes/app/owners/listings/my-listing'
            );
            return {
              Component: MyListingRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.adminListings.path,
          lazy: async () => {
            const { MyAdminListingRoute } = await import(
              './routes/app/admin/listings/my-listing'
            );
            return {
              Component: MyAdminListingRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.listing.path,
          lazy: async () => {
            const { ListingRoute } = await import(
              './routes/app/owners/listings/listing'
            );
            return {
              Component: ListingRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.rentals.path,
          lazy: async () => {
            const { RentalsRoute } = await import(
              './routes/app/owners/rentals/rentals'
            );
            return {
              Component: RentalsRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.rental.path,
          lazy: async () => {
            const { RentalRoute } = await import(
              './routes/app/owners/rentals/rental'
            );
            return {
              Component: RentalRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.bookings.path,
          lazy: async () => {
            const { BookingsRoute } = await import(
              './routes/app/owners/bookings/bookings'
            );
            return {
              Component: BookingsRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.booking.path,
          lazy: async () => {
            const { BookingRoute } = await import(
              './routes/app/owners/bookings/booking'
            );
            return {
              Component: BookingRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.search.path,
          lazy: async () => {
            const { SearchRentalsRoute } = await import(
              './routes/app/owners/rentals/search'
            );
            return {
              Component: SearchRentalsRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.reviews.path,
          lazy: async () => {
            const { ReviewsRoute } = await import(
              './routes/app/owners/reviews/reviews'
            );
            return {
              Component: ReviewsRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.review.path,
          lazy: async () => {
            const { ReviewRoute } = await import(
              './routes/app/owners/reviews/review'
            );
            return {
              Component: ReviewRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.settings.path,
          lazy: async () => {
            const { SettingsRoute } = await import(
              './routes/app/admin/settings'
            );
            return {
              Component: SettingsRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.profile.path,
          lazy: async () => {
            const { ProfileRoute } = await import('./routes/app/profile');
            return {
              Component: ProfileRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./routes/not-found');
        return {
          Component: NotFoundRoute,
        };
      },
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);
  return <RouterProvider router={router} />;
};
