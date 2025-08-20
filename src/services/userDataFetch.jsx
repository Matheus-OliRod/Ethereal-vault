import { createContext, useContext, useEffect, useState } from "react";
import mockData from "@/res/placeholders/current-user-data.json";

const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export const UserDataProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const res = await fetch("#"); // Substitute for actual user fetching file or API
                const data = await res.json();
                setUserData(data);
            }
            catch(err) {
                console.error("User fetching error: ", err);
                setUserData(mockData);
            }
            finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) return <div>Loading user...</div>;

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
        {children}
        </UserContext.Provider>
    );

};

