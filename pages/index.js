


import ResumeComponent from './ResumeComponent'
import PortfolioComponent from './portfolio'
import HomeComponent from './HomeComponent'
import ContactComponent from './ContactComponent'





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
