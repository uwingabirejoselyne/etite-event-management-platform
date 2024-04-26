import { ButtonHTMLAttributes, InputHTMLAttributes, PropsWithChildren } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  color?: 'filled' | 'outlined' | 'danger'
}

export interface TextInputProps extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  name:
    | 'name'
    | 'type'
    | 'licensePlate'
    | 'horsepower'
    | 'fuelType'
    | 'info'
    | 'username'
    | 'password'
  label: string | undefined
  type?: string
  className?: string
  register: UseFormRegisterReturn
}
