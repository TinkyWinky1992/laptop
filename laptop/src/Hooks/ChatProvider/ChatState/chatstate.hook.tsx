import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type DateContext = {
  close: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;

  hide: boolean;
  setHide: Dispatch<SetStateAction<boolean>>;

  closeFriend: boolean;
  setCloseFriend: Dispatch<SetStateAction<boolean>>;
};

const DetailsContext = createContext<DateContext | undefined>(undefined);

export const ChatStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [close, setClose] = useState<boolean>(true);
  const [hide, setHide] = useState<boolean>(true);
  const [closeFriend, setCloseFriend] = useState<boolean>(true);

  return (
    <DetailsContext.Provider
      value={{
        closeFriend,
        setCloseFriend,
        close,
        setClose,
        hide,
        setHide,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export const useChatState = () => {
  const context = useContext(DetailsContext);
  if (context === undefined) {
    throw new Error("useDetailsContext must be used within a DetailsProvider");
  }
  return context;
};
