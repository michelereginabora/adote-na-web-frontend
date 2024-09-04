import { useState, useCallback } from 'react';

const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    const deltaX = startX - currentX;
    const swipeThreshold = 10; 

    if (deltaX > swipeThreshold) {
      onSwipeLeft();
    } else if (deltaX < -swipeThreshold) {
      onSwipeRight();
    }
  }, [startX, currentX, onSwipeLeft, onSwipeRight]);

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
};

export default useSwipe;
