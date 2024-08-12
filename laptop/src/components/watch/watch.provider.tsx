import React, { createContext, useState, useContext, ReactNode, SetStateAction, Dispatch } from 'react';


type DateContext = {
    day: number;
    setDay: Dispatch<SetStateAction<number>>;

    month: number;
    setMonth: Dispatch<SetStateAction<number>>;

    year: number;
    setYear: Dispatch<SetStateAction<number>>;

    hour: number;
    setHour:Dispatch<SetStateAction<number>>;

    minutes: number,
    setMinutes: Dispatch<SetStateAction<number>>;
};


const DetailsContext = createContext<DateContext | undefined>(undefined);


export const DateContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {


    const [day, setDay] = useState<number>(8);
    const [month, setMonth] = useState<number>(8);
    const [year, setYear] = useState<number>(2024);

    const [hour, setHour]= useState<number>(19);
    const [minutes, setMinutes] = useState(48);
    


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
