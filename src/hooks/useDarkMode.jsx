import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = value => {
  const [darkMode, setDarkMode] = useLocalStorage(value);
  !darkMode
    ? document.body.classList.add("dark-mode")
    : document.body.classList.remove("dark-mode");
  return [darkMode, setDarkMode];
};
