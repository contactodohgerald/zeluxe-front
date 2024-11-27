import { AddListingResponse } from '@/types/api';
import { z } from 'zod';
import { api } from './api-client';

export const addListingInputSchema = z.object({
  list_title: z.string().min(1, 'Required'),
  list_type: z.string().min(5, 'Required'),
  list_cycle: z.string().min(5, 'Required'),
  list_price: z.string().min(5, 'Required'),
  list_location: z.string().min(5, 'Required'),
  list_address: z.string().min(5, 'Required'),
  list_features: z.string().min(5, 'Required'),
  list_images: z.string().min(5, 'Required'),
});

export type AddListingInput = z.infer<typeof addListingInputSchema>;

const createListing = async (
  data: AddListingInput,
): Promise<AddListingResponse> => {
  return api.post('/auth/login', data);
};

export const listConfig = {
  addlistFn: async (data: AddListingInput) => {
    const response = await createListing(data);
    return response.listings;
  },
};
