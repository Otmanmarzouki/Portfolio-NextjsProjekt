import Image from 'next/image'
import ProfilePhoto from '../public/Photos/ProfilePhoto.jpg'

export default function PictureProfilComponent() {
  return (
  <>
  <Image  src={ProfilePhoto} className="rounded-2xl w-52"  alt='profile' />

  </>
  )
}
