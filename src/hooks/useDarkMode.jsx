import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage(darkMode, value);
    darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    
return [darkMode, setDarkMode];
}

