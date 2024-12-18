import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  let error = useRouteError() as Error;
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
              Error
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {error.message}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              The stack trace is:
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {error.stack}
            </p>
            <a
              href="#"
              className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
};
