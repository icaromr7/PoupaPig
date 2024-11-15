import React, { createContext, useContext, useState } from "react";

type HeaderType = "landpage" | "signin" | "default" | "none" | "profile";

interface HeaderContextProps {
  headerType: HeaderType;
  setHeaderType: (type: HeaderType) => void;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headerType, setHeaderType] = useState<HeaderType>("default");

  return (
    <HeaderContext.Provider value={{ headerType, setHeaderType }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};
