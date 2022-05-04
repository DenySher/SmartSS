import { createContext, useContext, useState, useEffect } from 'react';
import cookieCutter from "cookie-cutter";
import { APIURL } from '../consts';

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [modalVisible, setModalVisible] = useState({
        modalFirstSection: false,
        modalSubSection: false,
    })

    useEffect(() => {
        const token = cookieCutter.get("ourToken");
        if (token) {
            fetch(`${APIURL}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(async (res) => {
                if (!res.ok) {
                    cookieCutter.set('ourToken', '', { expires: new Date(0) })
                    setAuth(false)
                    setUser(null)
                    return null
                } else {
                    const ourUser = await res.json();
                    setUser(ourUser)
                    setAuth(true)
                }
            });
        }
    }, []);

    const state = {
        auth,
        setAuth,
        user,
        setUser,
        modalVisible,
        setModalVisible
    };

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}