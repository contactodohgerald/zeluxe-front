import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Image } from '@/types/api';
import { onError } from '@/lib/utils';
import Img1 from '@/assets/images/card/lists-2.jpeg';

type Props = {
  images: Image[]; // Array of image URLs
};

const ImageCarousel: React.FC<Props> = ({ images }) => {
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
          className="absolute left-[20px] top-[38%] z-[2] -translate-y-1/2 rounded-full border px-[15px] py-[5px] text-[32px] text-white"
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
                  className={`mx-auto h-1/2 w-full rounded object-cover ${
                    currentIndex === index ? 'active' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-[20px] top-[38%] z-[2] -translate-y-1/2 rounded-full border px-[15px] py-[5px] text-[32px] text-white"
          onClick={onNext}
        >
          →
        </button>
        {/* overlay */}
        <div className="absolute bottom-0 left-0 top-0 h-1/2 w-full rounded bg-[rgba(0_0_0/0.26)]"></div>
      </div>

      {/* Thumbnail Section */}
      <div className="mx-auto mt-4 flex flex-wrap justify-center gap-4">
        {images.map((src, index) => (
          <div
            className={`items-cemter flex h-20 w-[90px] justify-center ${currentIndex === index ? 'border-2 border-primary' : ''} cursor-pointer`}
          >
            <img
              key={src?.id}
              onError={(e) => onError(e, Img1)}
              src={src?.url}
              alt={`Thumbnail ${index}`}
              className={`className="object-cover w-full ${currentIndex === index ? 'active' : ''}`}
              onClick={() => scrollTo(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
