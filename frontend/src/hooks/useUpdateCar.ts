import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
import { apiUrl } from '../util/apiUrl'

export default function useUpdateCar(id: number | undefined) {
  return useAxios(
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/cars/${id}`,
      method: 'PATCH',
    },
    { manual: true },
  )
}
