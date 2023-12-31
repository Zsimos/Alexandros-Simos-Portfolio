import { HTML, Html } from '@react-three/drei'

const loader = () => {
  return (
    <Html>
    <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 rounded-full anime-spin'></div>
    </div>
    </Html>
  )
}

export default loader
