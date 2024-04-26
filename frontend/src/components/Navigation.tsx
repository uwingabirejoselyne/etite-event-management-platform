import { Link } from 'react-router-dom'
import MenuIcon from '../assets/MenuIcon'
import Logo from '../assets/logo.jpg'
import ProfileIcon from '../assets/ProfileIcon'
const Navigation = () => (
  <div className=" flex items-center justify-between rounded-b-lg border border-indigo-tertiary bg-indigo-tertiary px-5 text-white">
    <Link to="/menu" className="h-6 w-6">
      <MenuIcon />
    </Link>
    <Link to="/user">
      <img src={Logo} className="relative top-3 w-16" alt="" />
    </Link>
    <Link to="/landingpage">
      <ProfileIcon className="h-6 w-6" />
    </Link>
  </div>
)

export default Navigation
