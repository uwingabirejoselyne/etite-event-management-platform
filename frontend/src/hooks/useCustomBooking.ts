import { BookingDto } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'

export default function useCustomBookings() {
  return useAxios<BookingDto[]>(
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/bookings`,
    },
    {
      useCache: false,
    },
  )
}
