import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'

export default function useChangeBooking() {
  return useAxios(
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      method: 'PATCH',
    },
    { manual: true },
  )
}
