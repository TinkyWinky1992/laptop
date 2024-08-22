import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

// Updated the type to be an array of strings
type DateContext = {
  text: string[];
  setText: Dispatch<SetStateAction<string[]>>;
};

const DetailsContext = createContext<DateContext | undefined>(undefined);

export const MessageStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize text as an empty array
  const [text, setText] = useState<string[]>([]);

  return (
    <DetailsContext.Provider
      value={{
        text,
        setText,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(DetailsContext);
  if (context === undefined) {
    throw new Error("useDetailsContext must be used within a DetailsProvider");
  }
  return context;
};
