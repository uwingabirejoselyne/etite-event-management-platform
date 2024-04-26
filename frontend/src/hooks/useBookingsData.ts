import { BookingDto, BookingState, CarDto, UserDto } from '../util/api'
import { useCarTypes, useUsers, useCars } from './index'
import { useCustomBookings } from './index'

export type BookingWithReferences = BookingDto & {
  car?: CarDto & {
    owner?: UserDto
    carTypeName?: string
    imageUrl?: string
  }
  renter?: UserDto
  state?: BookingState | undefined
}

interface FetchedBookings {
  loading: boolean
  data: BookingWithReferences[]
  error: boolean
  refetch: () => void
}

export default function useBookingData() {
  const [{ data: allCars, error: allCarsError, loading: allCarsLoading }] = useCars()
  const [{ data: carOwners, error: carOwnersError, loading: carOwnersLoading }] = useUsers()
  const [{ data: carTypes, error: carTypesError, loading: carTypesLoading }] = useCarTypes()
  const [{ data: bookingsData, error: bookingsError, loading: bookingsLoading }, refetch] =
    useCustomBookings()

  const allBookingsData: FetchedBookings = {
    loading: false,
    data: [],
    error: false,
    refetch,
  }

  const customCars = allCars?.map(car => {
    const carType = carTypes?.find(carType => carType.id === car.carTypeId)
    const carOwner = carOwners?.find(carOwner => carOwner.id === car.ownerId)

    return {
      owner: carOwner,
      carTypeName: carType?.name,
      imageUrl: carType?.imageUrl,
      ...car,
    }
  })

  const customBookingData = bookingsData?.map(booking => {
    const bookingCar = customCars?.find(car => car.id === booking.carId)
    const renter = carOwners?.find(carOwner => carOwner.id === booking.renterId)

    return {
      ...booking,
      car: bookingCar,
      renter,
    }
  })

  allBookingsData.data = customBookingData ? customBookingData : []

  if (allCarsError || carOwnersError || carTypesError || bookingsError) allBookingsData.error = true

  if (allCarsLoading || carOwnersLoading || carTypesLoading || bookingsLoading)
    allBookingsData.loading = true

  return allBookingsData
}
