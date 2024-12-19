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
  privacy: {
    path: '/privacy',
    getHref: () => '/privacy',
  },
  terms: {
    path: '/terms',
    getHref: () => '/terms',
  },

  auth: {
    chooseAccount: {
      path: '/auth/choose-account',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/choose-account${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    owner: {
      path: '/auth/owner/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/owner/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    renter: {
      path: '/auth/renter/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/renter/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
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
    owner: {
      dashboard: {
        path: '/app',
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
        path: '/app/listing/:listingId',
        getHref: (listingId: string) => `/app/listing/${listingId}`,
      },
      // rentals: {
      //   path: '/app/rentals',
      //   getHref: () => '/app/rentals',
      // },
      // rental: {
      //   path: '/app/rentals/:rentalId',
      //   getHref: (rentalId: string) => `/app/rentals/${rentalId}`,
      // },
      bookings: {
        path: '/app/bookings',
        getHref: () => '/app/bookings',
      },
      booking: {
        path: '/app/bookings/:bookingId',
        getHref: (bookingId: string) => `/app/bookings/${bookingId}`,
      },
      reviews: {
        path: '/app/reviews',
        getHref: () => '/app/reviews',
      },
      review: {
        path: '/app/reviews/:reviewId',
        getHref: (reviewId: string) => `/app/reviews/${reviewId}`,
      },
      profile: {
        path: '/app/profile',
        getHref: () => '/app/profile',
      },
    },
    admin: {
      dashboard: {
        path: '/app/admin',
        getHref: () => '/app/admin',
      },
      listings: {
        path: '/app/admin/my-listings',
        getHref: () => '/app/admin/my-listings',
      },
      listing: {
        path: '/app/admin/listing/:listingId',
        getHref: (listingId: string) => `/app/admin/listing/${listingId}`,
      },
      // rentals: {
      //   path: '/app/admin/rentals',
      //   getHref: () => '/app/admin/rentals',
      // },
      // rental: {
      //   path: '/app/admin/rentals/:rentalId',
      //   getHref: (rentalId: string) => `/app/admin/rentals/${rentalId}`,
      // },
      bookings: {
        path: '/app/admin/bookings',
        getHref: () => '/app/admin/bookings',
      },
      booking: {
        path: '/app/admin/bookings/:bookingId',
        getHref: (bookingId: string) => `/app/admin/bookings/${bookingId}`,
      },
      reviews: {
        path: '/app/admin/reviews',
        getHref: () => '/app/admin/reviews',
      },
      review: {
        path: '/app/admin/reviews/:reviewId',
        getHref: (reviewId: string) => `/app/admin/reviews/${reviewId}`,
      },
      settings: {
        path: '/app/admin/settings',
        getHref: () => '/app/admin/settings',
      },
      profile: {
        path: '/app/admin/profile',
        getHref: () => '/app/admin/profile',
      },
    },
    rentals: {
      path: '/app/rentals',
      getHref: () => '/app/rentals',
    },
    rental: {
      path: '/app/rentals/:rentalId',
      getHref: (rentalId: string) => `/app/rentals/${rentalId}`,
    },
    search: {
      path: '/app/search-results',
      getHref: () => '/app/search-results',
    },
    logout: {
      path: '/logout',
      getHref: () => '/logout',
    },
  },
} as const;

export const commonPaths = {};
