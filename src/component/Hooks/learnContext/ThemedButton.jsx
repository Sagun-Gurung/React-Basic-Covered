import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemedButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
            {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </button>
    );
};

export default ThemedButton;
