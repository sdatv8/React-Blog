import { createContext, PropsWithChildren, useEffect, useState } from "react";

type Theme = 'light' | 'dark'

interface IThemeContext {
  theme: Theme
  toggleTheme: () => void
}

const THEME_ITEM = 'theme'

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_ITEM)
    const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const needUpdate = localTheme ? localTheme !== theme : systemTheme;
    if (needUpdate) {
      toggleTheme()
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    document.body.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
    localStorage.setItem(THEME_ITEM, newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
