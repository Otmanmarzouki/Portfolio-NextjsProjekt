import { useState } from 'react';
import TabSelector from './Tab';
import PorfolioItem from './PorfolioItem';
import SectionTitle from '@/commons/Title';

const WebAppFotos = [
  { id: 1, img: '/Photos/1.png' },
  { id: 2, img: '/Photos/2.png' },
  { id: 3, img: '/Photos/3.png' }
];

const MobileAppFotos = [
  { id: 1, img: '/Photos/5.jpg' },
  { id: 2, img: '/Photos/6.jpg' }
];

export default function Portfolio() {
  const [openTab, setOpenTab] = useState(1);

  const renderContent = () => {
    if (openTab === 1) {
      return (
        <>
          <PorfolioItem key="web-app" title="Verein Verwaltung" subtitle="Dashboard" slides={WebAppFotos} />
          <PorfolioItem key="mobile-app" title="Kosmetische App" subtitle="Palmarosa" slides={MobileAppFotos} />
        </>
      );
    } else if (openTab === 2) {
      return <PorfolioItem key="web-app" title="Verein Verwaltung" subtitle="Dashboard" slides={WebAppFotos} />;
    } else if (openTab === 3) {
      return <PorfolioItem key="mobile-app" title="Kosmetische App" subtitle="Palmarosa" slides={MobileAppFotos} />;
    }
  };
  

  return (
    <section className="flex flex-col w-full bg-white dark:bg-[#111111] rounded-2xl space-y-5 p-4">
     
     <SectionTitle text="Portfolio" />
      <TabSelector openTab={openTab} setOpenTab={setOpenTab} />
      <div className="w-full p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {renderContent()}
      </div>
      
    </section>
    
  );
}
