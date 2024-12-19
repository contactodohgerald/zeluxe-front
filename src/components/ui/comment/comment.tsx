import {
  createRentalReviewInputSchmema,
  useCreateRentalReview,
} from '@/features/guest/api/create-rental-review';
import { Button } from '../button';
import { Form, Textarea } from '../form';
import { useNotifications } from '../notifications';
import { formatErrors } from '@/lib/utils';

export const CommentForm = ({ rentalId }: { rentalId: string }) => {
  const { addNotification } = useNotifications();
  const comment = useCreateRentalReview({
    mutationConfig: {
      onSuccess() {
        addNotification({
          type: 'success',
          title: 'success',
          message: 'Review saved successfully',
        });
      },
      onError(error) {
        const formatError = formatErrors(error);
        addNotification({
          type: 'error',
          title: formatError,
          message: error?.message,
        });
      },
    },
  });

  return (
    <section className="w-full bg-white py-8 antialiased dark:bg-gray-900 lg:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center lg:justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">
            Post a Comment
          </h2>
        </div>
        <Form
          className="mb-6"
          schema={createRentalReviewInputSchmema}
          onSubmit={(values) => {
            const commentData = {
              ...values,
              rental_id: rentalId,
            };
            comment.mutate({ data: commentData });
          }}
        >
          {({ formState, register }) => (
            <>
              <div className="mb-4 w-full rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <Textarea
                  rows={6}
                  registration={register('comment')}
                  error={formState.errors['comment']}
                  className="w-full flex-grow border-0 px-0 text-sm text-secondary focus:outline-none focus:ring-0"
                  placeholder="Write a comment..."
                  required
                />
              </div>
              <Button
                type="submit"
                isLoading={comment.isPending}
                className="focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-center text-xs font-medium text-white focus:ring-4"
              >
                Post comment
              </Button>
            </>
          )}
        </Form>
      </div>
    </section>
  );
};
