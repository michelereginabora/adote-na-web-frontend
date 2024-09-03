import { useEffect, useRef, useState } from 'react';

function useFadeInOnScroll<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { elementRef, isVisible };
}

export default useFadeInOnScroll;
