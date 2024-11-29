import { QueryClient } from '@tanstack/react-query';
import { queryConfig } from '@/lib/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Notifications } from '@/components/ui/notifications';
import { AuthLoader } from '@/lib/auth';
import { Spinner } from '@/components/ui/spinner';
import { MainErrorFallback } from '@/components/errors/main';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () => new QueryClient({ defaultOptions: queryConfig }),
  );

  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  });

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <HelmetProvider>
          <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{ persister }}
          >
            {import.meta.env.DEV && <ReactQueryDevtools />}
            <Notifications />
            <AuthLoader
              renderLoading={() => (
                <div className="flex h-screen w-screen items-center justify-center">
                  <Spinner size="xl" />
                </div>
              )}
            >
              {children}
            </AuthLoader>
          </PersistQueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
