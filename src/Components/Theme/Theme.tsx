import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import './theme.scss'

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <label className="switch">
      <input type="checkbox" onChange = { toggleTheme } checked = { theme === 'light'} />
        <span className="slider"></span>
    </label>
  )
}

export default Theme;
