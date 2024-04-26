import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
import { apiUrl } from '../util/apiUrl'

export default function useAuth() {
  return useAxios(
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/auth`,
      method: 'POST',
    },
    { manual: true },
  )
}
