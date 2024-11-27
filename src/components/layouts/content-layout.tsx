import { cn } from '@/utils/cn';
import { Head } from '../seo';
type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
  className?: string;
  component?: React.ReactNode;
};
export const ContentLayout = ({
  className,
  children,
  title,
  component,
}: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="container mx-auto lg:mx-0">
        <div className="flex">
          <h1
            className={cn(
              'flex-1 font-lato text-3xl font-bold leading-[2.62rem] tracking-[3%] text-secondary md:text-[2.2rem]',
              className,
            )}
          >
            {title}
          </h1>
          <div>{component}</div>
        </div>
        <div className="container">{children}</div>
      </div>
    </>
  );
};
