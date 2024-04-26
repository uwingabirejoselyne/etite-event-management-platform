import useCarTypes from './useCarTypes'

export default function useCarTypesInformation() {
  const [{ data: carTypes, loading: carTypesLoading }] = useCarTypes()
  const carTypesInformation = carTypes?.map(car => ({ id: car.id, value: car.name }))
  return { carTypesInformation, carTypesLoading }
}
