import React, { createContext, useState, useContext, ReactNode, SetStateAction, Dispatch } from 'react';


type DateContext = {
    day: string;
    setDay: Dispatch<SetStateAction<string>>;

    month: string;
    setMonth: Dispatch<SetStateAction<string>>;

    year: string;
    setYear: Dispatch<SetStateAction<string>>;

    hour: string;
    setHour:Dispatch<SetStateAction<string>>;

    minutes: string,
    setMinutes: Dispatch<SetStateAction<string>>;
};


const DetailsContext = createContext<DateContext | undefined>(undefined);


export const DateContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {


    const [day, setDay] = useState<string>("8");
    const [month, setMonth] = useState<string>("8");
    const [year, setYear] = useState<string>("2024");

    const [hour, setHour]= useState<string>("19");
    const [minutes, setMinutes] = useState<string>("48");
    


    return (
        <DetailsContext.Provider value={{ day, setDay, month, setMonth, year, setYear, hour, setHour, minutes, setMinutes}}>
            {children}
        </DetailsContext.Provider>
    );
};


export const useDateDetailsContext = () => {
    const context = useContext(DetailsContext);
    if (context === undefined) {
        throw new Error('useDetailsContext must be used within a DetailsProvider');
    }
    return context;
};
