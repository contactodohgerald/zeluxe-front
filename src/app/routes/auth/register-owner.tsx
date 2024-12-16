import { AuthLayout } from '../../../components/layouts/auth-layout';
import { RegisterOwnerForm } from '@/features/auth/components/register-owner-form';

export const RegisterOwnerRoute = () => {
  return (
    <AuthLayout title="">
      <section className="bg-gray-50 pb-24 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <RegisterOwnerForm />
        </div>
      </section>
    </AuthLayout>
  );
};
