import { useUser } from '.'

export default function useGetUserName(id: number) {
  const data = useUser(id)
  return data[0].data?.name
}
