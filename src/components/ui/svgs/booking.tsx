import React from 'react';

export const BookingSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.5 0V5M11.5 0V5M3 7.5H6M12 7.5H9M3 10.5H6M9 10.5H12M1.5 2.5H13.5C14.0523 2.5 14.5 2.94772 14.5 3.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H1.5C0.947716 14.5 0.5 14.0523 0.5 13.5V3.5C0.5 2.94772 0.947715 2.5 1.5 2.5Z"
        stroke="#000000"
      />
    </svg>
  );
};
