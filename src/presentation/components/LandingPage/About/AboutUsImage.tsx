import React from 'react';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';


const AboutUsImage: React.FC = () => {
  const { elementRef, isVisible } = useFadeInOnScroll<HTMLImageElement>();

  return (
    <img
      ref={elementRef}
      src="assets/dogandcats.webp"
      alt="About Us"
      className={`lg:w-[95%] h-auto object-cover rounded-lg md:ml-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
    />
  );
};

export default AboutUsImage;
