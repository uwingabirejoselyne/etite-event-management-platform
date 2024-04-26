import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { useAuthRedirect } from '../hooks/useAuthRedirect'
const ProtectedRoute = () => {
  useAuthRedirect()
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default ProtectedRoute
