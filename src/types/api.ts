export type BaseEntity = {
  id: string;
  created_at: string;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type Meta = {
  page: number;
  total: number;
  totalPages: number;
};

export type User = Entity<{
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  role_id: string;
  username: string;
  reffered_id?: null;
  gender: string;
  avatar?: null;
  email_verified_at: string;
  login_otp?: null;
  is_verified: boolean;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
  role: {
    id: string;
    name: string;
    deleted_at?: null;
    created_at: string;
    updated_at: string;
  };
}>;

export type UserResponse = {
  success?: boolean;
  message?: string;
  user: User;
  accessToken: string;
};

export type Review = Entity<{
  body: string;
  review_id: string;
  author: User;
}>;

export type ListFeature = Entity<{
  bedroom: number;
  bathroom: number;
  balcony: number;
}>;

export type Active = Entity<{
  id: string;
  owner_id: string;
  category_id: string;
  address_id: string;
  name: string;
  slug: string;
  cycle: string;
  price: string;
  description: string;
  listing_type: string;
  status: string;
  availability_status: string;
  duration: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
  category: Category;
  owner: Owner;
  address: Address;
  features: Feature[];
  images: Image[];
  reviews: [];
  ratings: [];
}>;
export type Drafts = Entity<{
  id: string;
  owner_id: string;
  category_id: string;
  address_id: string;
  name: string;
  slug: string;
  cycle: string;
  price: string;
  description: string;
  listing_type: string;
  status: string;
  availability_status: string;
  duration: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
  category: Category;
  owner: Owner;
  address: Address;
  features: Feature[];
  images: Image[];
  reviews: [];
  ratings: [];
}>;
export type Reviewing = Entity<{
  id: string;
  owner_id: string;
  category_id: string;
  address_id: string;
  name: string;
  slug: string;
  cycle: string;
  price: string;
  description: string;
  listing_type: string;
  status: string;
  availability_status: string;
  duration: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
  category: Category;
  owner: Owner;
  address: Address;
  features: Feature[];
  images: Image[];
  reviews: [];
  ratings: [];
}>;
export type Rejected = Entity<{
  id: string;
  owner_id: string;
  category_id: string;
  address_id: string;
  name: string;
  slug: string;
  cycle: string;
  price: string;
  description: string;
  listing_type: string;
  status: string;
  availability_status: string;
  duration: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
  category: Category;
  owner: Owner;
  address: Address;
  features: Feature[];
  images: Image[];
  reviews: [];
  ratings: [];
}>;
export type Closed = Entity<{
  id: string;
  owner_id: string;
  category_id: string;
  address_id: string;
  name: string;
  slug: string;
  cycle: string;
  price: string;
  description: string;
  listing_type: string;
  status: string;
  availability_status: string;
  duration: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
  category: Category;
  owner: Owner;
  address: Address;
  features: Feature[];
  images: Image[];
  reviews: [];
  ratings: [];
}>;
export type Listing = Entity<{
  active: Active[];
  drafts: Drafts[];
  reviewing: Reviewing[];
  rejected: Rejected[];
  closed: Closed[];
}>;

export type ListingResponse = {
  success: boolean;
  message: string;
  data: Listing;
};

export type RentalReview = Entity<{
  id: string;
  user_id: string;
  reviewable_id: string;
  description: string;
  status: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
  user: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    status: string;
    role_id: string;
    username: string;
    reffered_id?: null;
    gender: string;
    avatar?: null;
    email_verified_at: string;
    login_otp?: null;
    is_verified: boolean;
    deleted_at?: null;
    created_at: string;
    updated_at: string;
  };
  listing: {
    id: string;
    owner_id: string;
    category_id: string;
    address_id: string;
    name: string;
    slug: string;
    cycle: string;
    price: string;
    description: string;
    listing_type: string;
    status: string;
    availability_status: string;
    duration: string;
    deleted_at?: null;
    created_at: string;
  };
  owner: Owner;
  category: Category;
  address: Address;
  reviews: [
    {
      id: string;
      user_id: string;
      reviewable_id: string;
      description: string;
      status: string;
      deleted_at?: null;
      created_at: string;
      updated_at: string;
    },
  ];
  ratings: [];
}>;

export type RentalBooking = Entity<{
  id: string;
  user_id: string;
  rental_id: string;
  start_date: string;
  end_date: string;
  amount: string;
  booking_id: string;
  status: string;
  notes: string;
  payment_received: number;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
  user: User;
  data: Rental;
  rental: {
    id: string;
    owner_id: string;
    category_id: string;
    address_id: string;
    name: string;
    slug: string;
    cycle: string;
    price: string;
    description: string;
    status: string;
    duration: string;
    deleted_at?: null;
    created_at: string;
    updated_at: string;
    owner: Owner;
    category: Category;
    address: Address;
    state: State;
    country: Country;
  };
  reviews: RentalBookingReview[];
  ratings: Rating[];
}>;

export type Rating = Entity<{
  id: string;
  user_id: string;
  ratable_id: string;
  score: number;
  status: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
}>;
export type RentalBookingReview = Entity<{
  id: string;
  user_id: string;
  reviewable_id: string;
  description: string;
  status: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
}>;

export type Address = Entity<{
  id: string;
  user_id: string;
  country_id: string;
  state_id: string;
  street_no: string;
  nearest_landmark: string;
  address_type: string;
  location: string;
  city: string;
  zip_code: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  state: State;
  country: Country;
}>;

export type Owner = Entity<{
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  role_id: string;
  username: string;
  reffered_id: string;
  gender: string;
  avatar?: null;
  email_verified_at: string;
  login_otp?: null;
  is_verified: boolean;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
}>;

export type Category = Entity<{
  id: string;
  name: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
}>;

export type Feature = Entity<{
  id: string;
  attachable_id: string;
  name: string;
  value: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
}>;

export type Image = Entity<{
  id: string;
  uploader_id: string;
  attachable_id: string;
  url: string;
  deleted_at?: null;
  created_at: string;
  updated_at: string;
}>;

export type Rental = Entity<{
  id: string;
  owner_id: string;
  category_id: string;
  address_id: string;
  name: string;
  slug: string;
  cycle: string;
  price: string;
  description: string;
  listing_type: string;
  status: string;
  availability_status: string;
  duration: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
  category: Category;
  owner: Owner;
  address: Address;
  features: Feature[];
  images: Image[];
  reviews: [];
  ratings: Rating[];
}>;

export type RentalResponse = {
  success: boolean;
  message: string;
  data: Rental;
};

export type ListFeatures = Entity<{
  name: string;
  value: number | string;
}>;

export type CreateListings = {
  category_id: string;
  name: string;
  price: string;
  discount?: number;
  qty?: number;
  description: string;
  address_id: string;
  listing_images: string[];
  listing_features: ListFeatures[];
};

export type RegisterData = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  role_id: string;
  username: string;
  id: string;
  updated_at: string;
  created_at: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  data: RegisterData;
};

export type State = {
  id: string;
  name: string;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
};
export type StateResponse = {
  success: boolean;
  message: string;
  data: State[];
};

export type Country = {
  id: string;
  name: string;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
};
export type CountryResponse = {
  success: boolean;
  message: string;
  data: Country[];
};

export type Setting = Entity<{
  id: string;
  site_name: string;
  app_name: string;
  site_email: string;
  support_email: string;
  site_logo: string;
  app_logo: string;
  site_phone: string;
  address: string;
  site_favicon: string;
  app_icon: string;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
}>;

//account_activation,password_reset,others
export type Verify = {
  email: string;
  type: string;
  otp: string;
};
export type AuthResponse = {
  data: {
    user: User;
    access_token: string;
  };
};
