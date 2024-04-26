import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const UnprotectedRoutes = () => (
  <>
    <Navigation />
    <Outlet />
  </>
)

export default UnprotectedRoutes
