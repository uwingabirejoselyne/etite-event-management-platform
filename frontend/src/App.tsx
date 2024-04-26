import { configure } from 'axios-hooks'
import Layout from './components/Layout'
import UnprotectedRoutes from './Routes/UnprotectedRoutes'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import ProtectedRoute from './Routes/ProtectedRoute'
import Home from './pages/Home'
// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in src/hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={'hhh'}>
      <Route path="user" element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/" element={<UnprotectedRoutes />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Route>,
  ),
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
