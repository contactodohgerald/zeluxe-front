import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { paths } from '@/config/paths';
import { Head } from '../seo';
import { Header } from '../ui/header';
import { Footer } from '../ui/footer';
import { getTokenFromCookie } from '@/lib/utils';
import { useUser } from '@/lib/auth';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};
export const AuthLayout = ({ children, title }: LayoutProps) => {
  const [searchParams] = useSearchParams();
  // const token = getTokenFromCookie();
  const [role, setRole] = React.useState<string | null>(null);
  const token = getTokenFromCookie();
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      try {
        const role = user?.data?.role?.name;
        setRole(role); 
      } catch (error) {
        console.error('Error decoding token or determining role:', error);
        navigate(paths.auth.login.getHref(), { replace: true });
      }
    }
  }, [token, navigate]);

  useEffect(() => {
    if (role) {
      const redirectTo =
        searchParams.get('redirectTo') ||
        (role === 'owner'
          ? paths.app.ownerDashboard.getHref()
          : role === 'admin'
          ? paths.app.adminDashboard.getHref()
          : paths.home.getHref());

      navigate(redirectTo, { replace: true });
    }
  }, [role, navigate, searchParams]);

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
