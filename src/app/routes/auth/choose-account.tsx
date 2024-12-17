import { Link } from 'react-router-dom';
import { AuthLayout } from '../../../components/layouts/auth-layout';
import { paths } from '@/config/paths';
import { Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faPerson } from '@fortawesome/free-solid-svg-icons';

export const ChooseAccountRoute = () => {
  return (
    <AuthLayout title="">
      <section className="container mx-auto pb-24 dark:bg-gray-900">
        <div className="mx-auto flex w-full flex-col items-center px-6 py-24 md:h-screen lg:mt-24 lg:py-0">
          <h1 className="mb-8 font-montserrat text-3xl font-semibold">
            Choose an Account Type
          </h1>
          <Link to={paths.auth.owner.getHref()}>
            <Card className="mb-6 w-full p-8 text-center shadow-md hover:border hover:border-primary md:w-[500px]">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faCashRegister}
                  className="text-xl text-primary md:text-3xl"
                />
                <p className="text-xl font-semibold tracking-normal lg:leading-3">
                  Register as a Property Owner
                </p>
              </div>
            </Card>
          </Link>
          <Link to={paths.auth.renter.getHref()}>
            <Card className="font-poppins mb-4 w-full p-8 text-center shadow-md hover:border hover:border-primary md:w-[500px]">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="text-xl text-primary md:text-3xl"
                />
                <div>
                  <p className="text-xl font-semibold tracking-normal lg:leading-3">
                    Register as an Individual
                  </p>
                  <p className="mt-1 font-medium text-grey-5">
                    (Searching for property)
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>
    </AuthLayout>
  );
};
