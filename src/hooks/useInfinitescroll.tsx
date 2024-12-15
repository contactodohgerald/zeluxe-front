// import { useEffect, useRef, useState } from 'react';

// export type UseInfiniteScrollOptions = {
//   fetchData: () => Promise<any[]>;
//   pageSize?: number;
// };

// export const useInfiniteScroll = ({
//   fetchData,
//   pageSize = 10,
// }: UseInfiniteScrollOptions) => {
//   const [allData, setAllData] = useState<any[]>([]);
//   const [data, setData] = useState<any[]>([]);
//   const [page, setPage] = useState(1);
//   const [isFetching, setIsFetching] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const observerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const loadInitailData = async () => {
//       setIsFetching(true);
//       const fullData = await fetchData();
//       console.log('fullData', fullData);
//       setAllData(fullData);
//       setData(fullData?.data?.slice(0, pageSize));
//       setIsFetching(false);
//     };

//     loadInitailData();
//   }, [fetchData, pageSize]);

//   useEffect(() => {
//     if (page > 1) {
//       const start = (page - 1) * pageSize;
//       const end = start + pageSize;
//       setData((prev) => [...prev, ...allData?.data?.slice(start, end)]);

//       if (end >= allData?.length) setHasMore(false);
//     }
//   }, [page, pageSize, allData]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && hasMore && !isFetching) {
//           setPage((prev) => prev + 1);
//         }
//       },
//       { threshold: 1.0 },
//     );

//     if (observerRef.current) {
//       observer.observe(observerRef.current);
//     }

//     return () => {
//       if (observerRef.current) {
//         observer.disconnect();
//       }
//     };
//   }, [hasMore, isFetching]);

//   return { data, isFetching, hasMore, observerRef };
// };
