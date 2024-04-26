import useAllBookingData from '../hooks/useAllBookingData'
import { useCarTypes } from '.'
import { useReadLocalStorage } from 'usehooks-ts'

export default function useBookingInfo() {
  const userId = useReadLocalStorage('userId')
  const [{ data: carTypes, loading: carTypeLoading }] = useCarTypes()
  const {
    data: bookings,
    isLoading: bookingLoading,
    refetch,
  } = useAllBookingData({
    currentUserId: Number(userId),
  })

  const isLoading = carTypeLoading || bookingLoading

  const bookingCars = bookings?.map(booking => {
    const carType = carTypes?.find(({ id }) => id === booking.car.carTypeId)
    return {
      ...booking,
      carImage: carType?.imageUrl,
    }
  })
  return {
    isLoading,
    bookingCars,
    refetch,
  }
}
