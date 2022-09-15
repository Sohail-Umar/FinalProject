import React from "react";

const CreateAdminStateContext = React.createContext(undefined);
const CreateAdminDispatchContext = React.createContext(undefined);

function AdminProvider({ children }) {

    const [isAuthenticated, setisAuthenticated] = React.useState(false);

    const handleAdminAuthChange = (isAuthenticated) => {
        setisAuthenticated(isAuthenticated)
    }

    return (

        <CreateAdminStateContext.Provider value={isAuthenticated}>
            <CreateAdminDispatchContext.Provider value={{ handleAdminAuthChange }}>
                {children}
            </CreateAdminDispatchContext.Provider>
        </CreateAdminStateContext.Provider>
    );
}

const useCreateAdminStateContext = () => {
    const context = React.useContext(CreateAdminStateContext);

    if (context === undefined) {
        throw Error("useAdminContext must be inside adminProvider")
    }

    return context;
};

const useCreateAdminDispatchContext = () => {
    const context = React.useContext(CreateAdminDispatchContext);

    if (context === undefined) {
        throw Error("useAdminContext must be inside userProvider")
    }

    return context;
};

const useAdminContext = () => {
    return [useCreateAdminStateContext(), useCreateAdminDispatchContext()]
}


export { AdminProvider, useCreateAdminStateContext, useCreateAdminDispatchContext, useAdminContext };