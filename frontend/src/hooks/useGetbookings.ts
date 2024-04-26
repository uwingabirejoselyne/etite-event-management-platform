import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
import { apiUrl } from '../util/apiUrl'

export default function useGetbookings() {
  return useAxios(
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/bookings`,
      method: 'GET',
    },
    { manual: true },
  )
}
