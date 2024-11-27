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
  first_name: string;
  last_name: string;
  email: string;
  role: 'ADMIN' | 'USER';
}>;

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

export type AddListing = Entity<{
  list_title: string;
  list_type: string;
  list_cycle: string;
  list_price: string;
  list_location: string;
  list_address: string;
  list_features: ListFeature;
  list_images: string;
}>;

export type AddListingResponse = {
  jwt: string;
  listings: AddListing;
};
export type AuthResponse = {
  jwt: string;
  user: User;
};
