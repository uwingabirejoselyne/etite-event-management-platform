import { useNavigate } from 'react-router-dom'
import Button from '../components/UI/Button'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-10 px-4">
      <p className="flex flex-col items-center pt-24 font-lora text-5xl text-white">
        <span className="font-bold uppercase">moni</span>
        <span className="font-medium italic">share</span>
      </p>
      <p className="flex flex-col items-center truncate py-10 font-lora text-xl font-thin text-white sm:px-14 sm:text-2xl">
        <span>Start Sharing Your Monis</span>
        <span>wiht the world</span>
      </p>
      <Button color="filled" className="mx-auto w-full max-w-md" onClick={() => navigate('/login')}>
        Log in
      </Button>
    </div>
  )
}

export default LandingPage
