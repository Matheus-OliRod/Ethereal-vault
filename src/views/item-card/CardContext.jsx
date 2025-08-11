
import { createContext, useContext, useState } from "react";
import placeholder from "@/res/placeholders/card-placeholder";

const CardContext = createContext(null);
export function useCard() {
    return useContext(CardContext);
}

export function CardProvider({children}) {
    const [data, setData] = useState(placeholder);

    return (
        <CardContext.Provider value={{data, setData}}>
            {children}
        </CardContext.Provider>
    )
}