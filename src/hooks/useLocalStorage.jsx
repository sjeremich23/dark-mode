import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);

    // Parse and return stored JSON or, if undefined, return intialValue
    return item ? JSON.parse(item) : initialValue;
  });

  setValue = value => {
    // Save State
    setStoredValue(value);

    // Save to Local Storage
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  useEffect(() => {
    darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
}, [darkMode])

return [darkMode, setDarkMode]
}