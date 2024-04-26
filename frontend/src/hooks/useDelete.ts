import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
import { apiUrl } from '../util/apiUrl'

export default function useDelete(id: string | number) {
  return useAxios(
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/cars/${id}`,
      method: 'DELETE',
    },
    { manual: true },
  )
}
