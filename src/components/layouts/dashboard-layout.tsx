import { useScrollToTop } from '@/hooks/use-scroll';
import { Header } from '../ui/dashboard/header';
import { Sidebar } from '../ui/dashboard/sidebar/sidebar';
import { useState } from 'react';
export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useScrollToTop();
  const [show, setShow] = useState(false);
  return (
    <div className="relative bg-green-gradient">
      <Sidebar show={show} />
      <div className="pl-3 pr-3 pt-[1.6rem] md:pl-[1.4rem] lg:pl-[14.4rem] lg:pr-[2.75rem]">
        {/* <div className="pl-3 lg:pl-[14.4rem] pt-[1.6rem] pr-3"> */}
        <div className="flex flex-col">
          <Header show={show} setShow={setShow} />
          <main>
            <div className="mt-[1.1rem] pt-[1.1rem]">{children}</div>
            {show && (
              <div
                onClick={() => setShow(false)}
                className="absolute inset-0 bg-[rgba(0_0_0/0.3)]"
              ></div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
