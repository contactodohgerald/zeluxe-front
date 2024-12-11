import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { paths } from '@/config/paths';
import { useMemo } from 'react';
import { AppRoot, AppRootErrorBoundary } from './routes/app/root';
import { ProtectedRoute } from '@/lib/auth';

export const createAppRouter = (_queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing/landing');
        return { Component: LandingRoute };
      },
    },
    {
      path: paths.homeDetail.path,
      lazy: async () => {
        const { LandingDetailRoute } = await import('./routes/landing/detail');
        return { Component: LandingDetailRoute };
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
      path: paths.auth.register.path,
      lazy: async () => {
        const { RegisterRoute } = await import('./routes/auth/register');
        return { Component: RegisterRoute };
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
          path: paths.app.dashboard.path,
          lazy: async () => {
            const { DashboardRoute } = await import('./routes/app/dashboard');
            return {
              Component: DashboardRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.addListings.path,
          lazy: async () => {
            const { AddListingRoute } = await import(
              './routes/app/listings/add-listing'
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
              './routes/app/listings/my-listing'
            );
            return {
              Component: MyListingRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.listing.path,
          lazy: async () => {
            const { ListingRoute } = await import(
              './routes/app/listings/listing'
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
              './routes/app/rentals/rentals'
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
            const { RentalRoute } = await import('./routes/app/rentals/rental');
            return {
              Component: RentalRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.search.path,
          lazy: async () => {
            const { SearchRentalsRoute } = await import(
              './routes/app/rentals/search'
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
              './routes/app/reviews/reviews'
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
            const { ReviewRoute } = await import('./routes/app/reviews/review');
            return {
              Component: ReviewRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.settings.path,
          lazy: async () => {
            const { SettingsRoute } = await import('./routes/app/settings');
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
