import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { paths } from '@/config/paths';
import { Head } from '../seo';
import { Header } from '../ui/header';
import { Footer } from '../ui/footer';
import { useUser } from '@/lib/auth';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};
export const AuthLayout = ({ children, title }: LayoutProps) => {
  const [searchParams] = useSearchParams();
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.data?.role?.name) {
      const redirectTo =
        searchParams.get('redirectTo') ||
        (user?.data?.role?.name === 'owner'
          ? paths.app.owner.dashboard.getHref()
          : user?.data?.role?.name === 'admin'
            ? paths.app.admin.dashboard.getHref()
            : paths.home.getHref());

      navigate(redirectTo, { replace: true });
    }
  }, [user, navigate, searchParams]);

  return (
    <>
      <Head title={title} />
      <Header />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};
