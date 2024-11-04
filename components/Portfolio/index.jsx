import { useState } from 'react';
import TabSelector from './Tab';
import PorfolioItem from './PorfolioItem';

const WebAppFotos = [
  { id: 1, img: '/Photos/1.png' },
  { id: 2, img: '/Photos/2.png' },
  { id: 3, img: '/Photos/3.png' }
];

const MobileAppFotos = [
  { id: 1, img: '/Photos/5.jpg' },
  { id: 2, img: '/Photos/6.jpg' }
];

export default function MainContent() {
  const [openTab, setOpenTab] = useState(1);

  const renderContent = () => {
    if (openTab === 1) {
      return (
        <>
          <PorfolioItem title="Verein Verwaltung" subtitle="Dashboard" slides={WebAppFotos} />
          <PorfolioItem title="Kosmetische App" subtitle="Palmarosa" slides={MobileAppFotos} />
        </>
      );
    } else if (openTab === 2) {
      return <PorfolioItem title="Verein Verwaltung" subtitle="Dashboard" slides={WebAppFotos} />;
    } else if (openTab === 3) {
      return <PorfolioItem title="Kosmetische App" subtitle="Palmarosa" slides={MobileAppFotos} />;
    }
  };

  return (
    <section className="flex flex-col items-center w-full p-6 max-w-4xl bg-black rounded-2xl space-y-5">
      <h1 className="text-xl font-semibold text-white">Projekte</h1>
      <TabSelector openTab={openTab} setOpenTab={setOpenTab} />
      <div className="w-full p-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {renderContent()}
      </div>
    </section>
  );
}
