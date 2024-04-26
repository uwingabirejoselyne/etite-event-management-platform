import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginValues } from '../util/type'
import { loginValidationSchema } from '../util/ValidationSchema'
import TextInputField from '../components/UI/TextInputField'
import ProfileIcon from '../assets/ProfileIcon'
import KeyIcon from '../assets/KeyIcon'
import Button from '../components/UI/Button'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'usehooks-ts'
import { useState } from 'react'
import { useAuth } from '../hooks'
import toast from 'react-hot-toast'

const Login = () => {
  const [, saveToken] = useLocalStorage('token', '')
  const [, saveUserId] = useLocalStorage('userId', '')
  const [displayToast, setDisplayToast] = useState(false)
  const navigate = useNavigate()
  const [{ loading, error }, getUser] = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({ resolver: zodResolver(loginValidationSchema) })
  const onSubmit = async (data: LoginValues) => {
    setDisplayToast(false)
    try {
      const response = await getUser({
        data: { ...data },
      })
      const { userId, token } = response.data
      saveToken(token)
      saveUserId(userId)
      toast.success('Welcome back!')
      navigate('/user')
    } catch (error) {
      console.error(error)
    }
  }

  if (error?.status === 500) throw new Error()

  if (error && !displayToast) {
    toast.error(
      'Your login attempt was not successful. Please make sure your user name and password are correct.!',
    )
    setDisplayToast(true)
  }
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <p className="flex flex-col items-center pt-24 font-lora text-5xl text-white ">
        <span className="font-bold uppercase">moni</span>
        <span className="font-medium italic">share</span>
      </p>
      <div className="mx-auto flex w-full max-w-md flex-col gap-12 px-4">
        <div className="pt-8 text-center">
          <span className="font-lora text-xl font-thin text-white">Login</span>
        </div>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <div>
              <TextInputField
                placeholder="Username / e-mail"
                name="username"
                type="text"
                label={undefined}
                register={register('username')}
              >
                <ProfileIcon className="ml-8 h-5 w-5 text-gray-100" />
              </TextInputField>
              {errors.username && <p className="text-mustard-100">{errors.username.message}</p>}
            </div>

            <div>
              <TextInputField
                placeholder="Password"
                name="password"
                type="password"
                label={undefined}
                register={register('password')}
              >
                <KeyIcon className="ml-8 h-5 w-5 text-gray-100" />
              </TextInputField>
              {errors.password && <p className="text-mustard-100">{errors.password.message}</p>}
            </div>
          </div>
          <Button
            type="submit"
            color="filled"
            className="mx-auto mt-8 w-full max-w-md"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
