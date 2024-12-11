export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },
  homeDetail: {
    path: '/:rentalId',
    getHref: (rentalId: string) => `/${rentalId}`,
  },
  search: {
    path: '/search/:slug',
    getHref: (slug: string) => `/search/${slug}`,
  },
  about: {
    path: '/about',
    getHref: () => '/about',
  },
  contact: {
    path: '/contact-us',
    getHref: () => '/contact-us',
  },

  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    verify: {
      path: '/auth/verify',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/verify${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    passwordReset: {
      path: '/auth/password-reset',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/password-reset${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    dashboard: {
      path: '',
      getHref: () => '/app',
    },
    addListings: {
      path: '/app/add-listing',
      getHref: () => '/app/add-listing',
    },
    myListings: {
      path: '/app/my-listing',
      getHref: () => '/app/my-listing',
    },
    listing: {
      path: 'my-listing/:listingId',
      getHref: (listingId: string) => `/app/my-listing/${listingId}`,
    },
    rentals: {
      path: '/app/rentals',
      getHref: () => '/app/rentals',
    },
    rental: {
      path: '/app/rentals/:rentalId',
      getHref: (rentalId: string) => `/app/rentals/${rentalId}`,
    },
    reviews: {
      path: '/app/reviews',
      getHref: () => '/app/reviews',
    },
    review: {
      path: '/app/reviews/:reviewId',
      getHref: (reviewId: string) => `/app/reviews/${reviewId}`,
    },
    settings: {
      path: '/app/settings',
      getHref: () => '/app/settings',
    },
    search: {
      path: '/app/search-results',
      getHref: () => '/app/search-results',
    },
    profile: {
      path: '/app/profile',
      getHref: () => '/app/profile',
    },
    logout: {
      path: '/logout',
      getHref: () => '/logout',
    },
  },
} as const;
