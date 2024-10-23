import { Outlet, useNavigate } from "react-router-dom"
import Theme from "../Theme/Theme"
import "./layout.scss"
import Icon from "../../Icon/Icon"

const Layout = () => {
  const navigate = useNavigate()

  return (
    <>
      <nav className="navbar">
        <div className="navbar__menu">
          <a className="navbar__item" onClick={() => navigate('/')}>
            {Icon('terminal', '20px')}
            Latest
          </a>
          <a className="navbar__item">Home</a>
        </div>
        <div className="navbar__menu">
          <Theme />
          <a className="navbar__item">About</a>
          <a className="navbar__item">Sign In</a>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
