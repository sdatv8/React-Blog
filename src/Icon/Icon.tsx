import { useContext } from "react"
import { ThemeContext } from "../providers/ThemeProvider"


const Icon = (name: string, width?: string) => {
  const { theme } = useContext(ThemeContext)
  return (
    <img src={`../public/${name}_${theme}.svg`} alt="Icon" style={{width: width}}/>
  )
}

export default Icon
