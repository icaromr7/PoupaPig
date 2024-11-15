import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Crie um contexto para isMobileScreen
const MobileScreenContext = createContext<boolean>(false);

export const useMobileScreen = () => useContext(MobileScreenContext);

interface AppProviderProps {
  children: ReactNode;
}

const MobileScreenProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(
    window.innerWidth <= 800
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileScreenContext.Provider value={isMobileScreen}>
      {children}
    </MobileScreenContext.Provider>
  );
};

export default MobileScreenProvider;
