// React Imports.
import { createContext, useContext, useState, useEffect } from "react"

const AlertContext = createContext()

export function useAlert() {
    return useContext(AlertContext)
}

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState(['danger', 'This is an Alert worry about it please'])

    const value = {
        alert,
        setAlert,
    }

    return (
        <AlertContext.Provider value={value}>
            {children}
        </AlertContext.Provider>
    )
}