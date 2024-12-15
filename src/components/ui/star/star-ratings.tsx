import { SetStateAction, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useNotifications } from '../notifications';
import {
  createRentalRatingInputSchema,
  useCreateRentalRating,
} from '@/features/guest/api/create-rental-rating';
import { formatErrors } from '@/lib/utils';
import { Form } from '../form';
import { Card } from 'antd';
import { Button } from '../button';

export type StarRatingProps = {
  rentalId: string;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
export const StarRatings = ({ setIsOpen, rentalId }: StarRatingProps) => {
  const { addNotification } = useNotifications();
  const [rating, setRating] = useState(0);

  const ratingMutation = useCreateRentalRating({
    mutationConfig: {
      onSuccess() {
        addNotification({
          type: 'success',
          title: 'success',
          message: 'Rating saved successfully',
        });
        setIsOpen(false);
      },
      onError(error) {
        const formError = formatErrors(error);
        addNotification({
          type: 'error',
          title: error.message,
          message: formError,
        });
      },
    },
  });

  return (
    <Form
      schema={createRentalRatingInputSchema}
      onSubmit={() => {
        const ratingData = {
          rental_id: rentalId,
          score: rating,
        };
        ratingMutation.mutate({ data: ratingData });
      }}
    >
      {({ formState, setValue }) => (
        <Card className="bg-white">
          <ReactStars
            count={5}
            onChange={(newRating: number) => {
              setRating(newRating);
              setValue('score', newRating);
            }}
            size={24}
            activeColor="#ffd700"
          />
          {formState.errors['score'] && (
            <p className="text-red-500">{formState.errors['score'].message}</p>
          )}
          <Button type="submit" isLoading={ratingMutation.isPending}>
            submit
          </Button>
        </Card>
      )}
    </Form>
  );
};
