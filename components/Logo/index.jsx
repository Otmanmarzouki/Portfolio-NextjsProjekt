import Image from 'next/image'
import LOGO from '@/public/Photos/LOGO.png'

export default function PictureProfilComponent() {
  return (
  <>
  <Image  src={LOGO} className=" w-48"  alt='profile' />
  </>
  )
}
