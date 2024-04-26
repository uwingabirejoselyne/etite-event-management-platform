import { z } from 'zod'
import { addNewCarValidationSchema, loginValidationSchema } from './ValidationSchema'

export type NewCarFormValues = z.infer<typeof addNewCarValidationSchema>
export type LoginValues = z.infer<typeof loginValidationSchema>
