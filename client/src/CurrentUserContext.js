import { useEffect, useState, createContext } from 'react';

export const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        fetch("/api/me/profile")
            .then((res) => res.json())
            .then((data) => {
                setCurrentUser(data.profile);
                setStatus("idle");
            });
    },[currentUser, status]);

    return (
        <CurrentUserContext.Provider
            value={{currentUser, setCurrentUser, status, setStatus}}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export default CurrentUserProvider;