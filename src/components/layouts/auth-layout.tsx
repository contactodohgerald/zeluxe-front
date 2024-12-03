import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { paths } from '@/config/paths';
import { Head } from '../seo';
import { Header } from '../ui/header';
import { Footer } from '../ui/footer';
import { getTokenFromCookie } from '@/lib/utils';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};
export const AuthLayout = ({ children, title }: LayoutProps) => {
  const [searchParams] = useSearchParams();
  const token = getTokenFromCookie();
  const redirectTo =
    searchParams.get('redirectTo') || paths.app.dashboard.getHref();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(redirectTo ? redirectTo : paths.app.dashboard.getHref(), {
        replace: true,
      });
    }
  }, [token, navigate, redirectTo]);

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
