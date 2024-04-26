import { useReadLocalStorage } from 'usehooks-ts'
import { useGetUserName } from '../hooks'
import Button from '../components/UI/Button'
const Home = () => {
  const userId = useReadLocalStorage('userId')
  const username = useGetUserName(Number(userId))
  return (
    <div className="flex flex-col gap-10 px-4">
      <p className="flex flex-col items-center pt-24 font-lora text-5xl text-white">
        <span className="font-bold uppercase">moni</span>
        <span className="font-medium italic">share</span>
      </p>
      <p className="flex flex-col items-center truncate py-10 font-lora text-xl font-thin text-white sm:px-14 sm:text-2xl">
        <span>Hello {username}</span>
        <span>What are you up today?</span>
      </p>
      <div className="flex flex-col gap-6 px-5">
        <Button className="filled mx-auto w-full max-w-md">Book a car</Button>
        <span className="flex justify-center text-white">Or</span>
        <Button color="outlined" className=" mx-auto w-full max-w-md">
          See my car
        </Button>
        <Button color="outlined" className="mx-auto w-full max-w-md">
          See My Bookings
        </Button>
      </div>
    </div>
  )
}

export default Home
