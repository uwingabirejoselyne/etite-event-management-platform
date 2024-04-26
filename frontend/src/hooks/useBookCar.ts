import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
import { apiUrl } from '../util/apiUrl'

export default function useBookCar() {
  return useAxios(
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/bookings`,
      method: 'POST',
    },
    { manual: true },
  )
}
