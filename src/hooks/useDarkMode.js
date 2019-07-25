import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () =>
{
    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage("darkMode", false);
    return [darkModeEnabled, setDarkModeEnabled];
}

