import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const Switcher = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
        }} >
            {children}
        </ThemeContext.Provider>
    );

}

export default Switcher;