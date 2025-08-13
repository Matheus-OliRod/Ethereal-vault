
import { createContext, useContext, useState } from "react";
import placeholder from "@/res/placeholders/card-placeholder";

const CardContext = createContext(null);
export function useCard() {
    return useContext(CardContext);
}

export function CardProvider({children}) {
    const [cardData, setCardData] = useState(placeholder);

    return (
        <CardContext.Provider value={{cardData, setCardData}}>
            {children}
        </CardContext.Provider>
    )
}