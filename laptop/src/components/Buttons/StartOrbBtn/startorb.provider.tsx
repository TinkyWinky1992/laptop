import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type StartOrbBtnContext = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DetailsContext = createContext<StartOrbBtnContext | undefined>(undefined);

export const StartOrbBtnContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DetailsContext.Provider value={{ open, setOpen }}>
      {children}
    </DetailsContext.Provider>
  );
};

export const useStartOrbBtnContext = () => {
  const context = useContext(DetailsContext);
  if (context === undefined) {
    throw new Error(
      "useStartOrbBtnContext must be used within a StartOrbBtnContextProvider"
    );
  }
  return context;
};
