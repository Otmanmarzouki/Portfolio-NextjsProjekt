

import SidebarContainer from './Components/SidebarContainer'
import ResumeComponent from './Components/ResumeComponent'
import PortfolioComponent from './Components/PortfolioComponent'

import bgtwo from './Photos/bgtwo.jpg'




export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col bg-transparent p-10  w-full"  style={{ backgroundImage: `url(${bgtwo.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    }}>
      
   
     

   <ResumeComponent/>
 
    </main>
  )
}
