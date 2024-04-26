import { useCars, useUsers, useCarTypes } from '.'

export default function useCarInfos() {
  const [{ data: carTypes, loading: carTypeLoading }] = useCarTypes()
  const [{ data: cars, loading: carsLoading }, refetchCar] = useCars()
  const [{ data: users, loading: usersLoading }] = useUsers()

  const isLoading = carTypeLoading || carsLoading || usersLoading
  const allCarsInformation = cars?.map(car => {
    const carType = carTypes?.find(({ id }) => id === car.carTypeId)
    const owner = users?.find(({ id }) => id === car.ownerId)
    return { ...car, carType, owner }
  })
  return {
    isLoading,
    allCarsInformation,
    refetchCar,
  }
}
