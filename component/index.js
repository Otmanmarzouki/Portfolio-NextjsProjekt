


import ResumeComponent from '../pages/ResumeComponent'
import PortfolioComponent from '../pages/PortfolioComponent'
import HomeComponent from '../pages/HomeComponent'
import ContactComponent from '../pages/ContactComponent'
import bgtwo from './Components/background/bgtwo.jpg'




export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col bg-transparent p-10  w-full"  style={{ backgroundImage: `url(${bgtwo.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    }}>
      

   <PortfolioComponent/>
 
    </main>
  )
}
