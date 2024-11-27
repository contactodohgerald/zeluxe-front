import * as React from 'react';
import { useEffect } from 'react';
import { useUser } from '@/lib/auth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { paths } from '@/config/paths';
import { Head } from '../seo';
import { Header } from '../ui/header';
import { Footer } from '../ui/footer';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};
export const AuthLayout = ({ children, title }: LayoutProps) => {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  const navigate = useNavigate();

  useEffect(() => {
    if (user.data) {
      navigate(redirectTo ? redirectTo : paths.app.dashboard.getHref(), {
        replace: true,
      });
    }
  }, [user.data, navigate, redirectTo]);
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
