import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Image } from '@/types/api';
import { onError } from '@/lib/utils';
import Img1 from '@/assets/images/card/lists-2.jpeg';
import { cn } from '@/utils/cn';

type Props = {
  images: Image[];
  className?: string;
};

const ImageCarousel: React.FC<Props> = ({ images, className = '' }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
      setCurrentIndex(index);
    },
    [emblaApi],
  );

  const onNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const onPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length,
      );
    }
  };

  return (
    <div className="carousel-container">
      {/* Large Image */}
      <div className="relative mx-auto mt-5">
        <button
          className="absolute left-[20px] top-[38%] z-[2] -translate-y-1/2 rounded-full border px-2 text-[32px] text-white"
          onClick={onPrev}
        >
          ←
        </button>
        <div className="embla w-full" ref={emblaRef} style={{ width: '100%' }}>
          <div className="embla__container h-auto rounded-xl py-2">
            {images.map((src, index) => (
              <div className="embla__slide" key={src?.id}>
                <img
                  src={src?.url}
                  onError={(e) => onError(e, Img1)}
                  alt={`Slide ${index}`}
                  className={`${cn(className, 'mx-auto h-full w-full rounded-lg object-cover sm:h-[400px]')} ${
                    currentIndex === index ? 'active' : ''
                  }`}
                />
                {/* overlay */}
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-lg bg-[rgba(0_0_0/0.26)]"></div>
                {/* overlay */}
                {/* count */}
                <div className="absolute bottom-0 left-0 right-0 z-[3] w-16 -translate-y-1/2 translate-x-1/2 rounded-lg bg-gray-800">
                  <p className="text-center font-raleway text-lg font-medium text-white">
                    {index + 1}/{images.length}
                  </p>
                </div>
                {/* count */}
              </div>
            ))}
          </div>
          {/* Thumbnail Section */}
          <div className="mx-auto mt-2 flex cursor-pointer flex-wrap gap-4">
            {images.map((src, index) => (
              <div
                key={`${src?.attachable_id}-${index + 1}`}
                className={`items-cemter flex h-20 w-[90px] justify-center ${currentIndex === index ? 'rounded-lg border-2 border-primary' : ''} cursor-pointer`}
              >
                <img
                  onError={(e) => onError(e, Img1)}
                  src={src?.url}
                  alt={`Thumbnail ${index}`}
                  className={`className="object-cover w-full rounded-lg ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => scrollTo(index)}
                />
              </div>
            ))}
          </div>
          {/* End Of Thumbnail */}
        </div>

        <button
          className="absolute right-[20px] top-[38%] z-[2] -translate-y-1/2 rounded-full border px-2 text-[32px] text-white"
          onClick={onNext}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
