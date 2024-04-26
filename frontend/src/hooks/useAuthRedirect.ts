import { useReadLocalStorage } from 'usehooks-ts'
import { useNavigate } from 'react-router-dom'

export function useAuthRedirect() {
  const token = useReadLocalStorage('token')
  const navigate = useNavigate()

  if (!token) {
    navigate('/')
  }
}
