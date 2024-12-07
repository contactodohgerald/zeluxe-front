import { useState } from 'react';

export const useCounters = () => {
  const [counters, setCounters] = useState<
    { label: string; count: number | string }[]
  >(() => {
    const savedCounters = localStorage.getItem('counters');
    return savedCounters ? JSON.parse(savedCounters) : [];
  });

  const saveCounters = (newCounters: typeof counters) => {
    localStorage.setItem('counters', JSON.stringify(newCounters));
    setCounters(newCounters);
  };
  const addCounter = (data: {
    listingName: string;
    listingValue: string | number;
  }) => {
    const newCounters = [
      ...counters,
      {
        label: data.listingName,
        count: Number(data.listingValue) || String(data.listingValue),
      },
    ];
    saveCounters(newCounters);
  };

  const updateCounter = (index: number, delta: number) => {
    const newCounters = counters.map((counter, i) =>
      i === index
        ? {
            ...counter,
            count:
              typeof counter.count === 'number'
                ? counter.count + delta
                : counter.count,
          }
        : counter,
    );
    saveCounters(newCounters);
  };

  const deleteCounter = (index: number) => {
    const newCounters = counters.filter((_, idx) => idx !== index);
    saveCounters(newCounters);
  };

  return { counters, addCounter, updateCounter, deleteCounter };
};
