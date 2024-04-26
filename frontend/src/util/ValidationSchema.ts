import { z } from 'zod'

export const addNewCarValidationSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  type: z.string().min(3, { message: 'Type must be at least 3 characters' }),
  licensePlate: z
    .string()
    .regex(
      /^(AB|AG|AR|B|BC|BH|BN|BR|BT|BV|BZ|CJ|CL|CS|CT|CV|DB|DJ|GJ|GL|GR|HD|HR|IF|IL|IS|MH|MM|MS|NT|OT|PH|SB|SJ|SM|SV|TL|TM|TR|VL|VN|VS)-(0[1-9]|[1-9][0-9]|[1-9][0-9][0-9])-[A-Za-z]{3}$/,
      { message: 'Invalid license plate format' },
    ),
  horsepower: z
    .string({ invalid_type_error: 'Horse Power is required' })
    .transform(Number)
    .refine(value => value >= 100, { message: 'Horse Power must be at least 100' }),
  fuelType: z.string().min(3, { message: 'Fuel Type must be at least 3 characters' }),
  info: z.string().min(3, { message: 'Additional Information must be at least 3 characters' }),
})

export const loginValidationSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
  password: z.string().min(3, { message: 'Password must be at least 3 characters' }),
})

export const bookCarValidationSchema = z.object({
  startDate: z.date().refine(date => date >= new Date(), {
    message: 'Start date cannot be in the past',
  }),
  endDate: z.date().refine(date => date >= new Date(), {
    message: 'End date cannot be in the past',
  }),
})
