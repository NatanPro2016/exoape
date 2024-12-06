import React, { createContext, useEffect, useState } from "react";

type PageTransitionContextType = {
  menuOpend: boolean;
  setMenuOpend: (value: boolean) => void;
  scrollPos: number;
  setscrollPos: (value: number) => void;
};
export const PageTranstionContext =
  createContext<PageTransitionContextType | null>(null);

const PageTranstion = ({ children }: { children: React.ReactNode }) => {
  const [menuOpend, setMenuOpend] = useState<boolean>(true);
  const [scrollPos, setscrollPos] = useState<number>(0);

  useEffect(() => {
    window.scrollBy({ top: scrollPos });
  }, [scrollPos, menuOpend]);

  return (
    <PageTranstionContext.Provider
      value={{ menuOpend, setMenuOpend, scrollPos, setscrollPos }}
    >
      {children}
    </PageTranstionContext.Provider>
  );
};

export default PageTranstion;
