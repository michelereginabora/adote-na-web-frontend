import React, { createContext, useMemo } from 'react';
import useViewportSize from '../hooks/useViewportSize ';


interface ViewportSizeContextValue {
  isDesktop: boolean;
  isMobile: boolean;
}

export const ViewportSizeContext = createContext<ViewportSizeContextValue | null>(null);

export const ViewportSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { width: viewportWidth} = useViewportSize();

  const isDesktop = useMemo(() => viewportWidth >= 768, [viewportWidth]);
  const isMobile = useMemo(() => viewportWidth < 768, [viewportWidth]);

  return (
    <ViewportSizeContext.Provider value={{ isDesktop, isMobile}}>
      {children}
    </ViewportSizeContext.Provider>
  );
};
