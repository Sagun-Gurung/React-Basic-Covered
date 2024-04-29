import React, { createContext, useState } from 'react'

//Creating a context object
export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <div>
            <h2>ThemeProvider</h2>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeProvider