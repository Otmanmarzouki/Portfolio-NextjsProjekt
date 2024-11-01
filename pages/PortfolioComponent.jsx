import { useState } from 'react'

import PictureProfil from '../component/PictureProfilComponent'
import TitleContent from '../component/TitleContent'
import SidebarTitle from '../component/SidebarTitle'
import SidebarSubTittle from '../component/SidebarSubTittle'
import SocialNetworkComponent from '../component/SocialNetworkComponent'
import PersonalinfosComponent from '../component/PersonalinfosComponent'
import ImageSlider from '../component/ImageSlider'



export default function PortfolioComponent() {

  const [openTab, setOpenTab] = useState(1);
  const WebAppFotos = [{ id: 1, img: "/Photos/1.png" }, { id: 2, img: "/Photos/2.png" }, { id: 3, img: "/Photos/3.png" }];
  const MobileAppFotos = [{ id: 1, img: "/Photos/5.jpg" }, { id: 2, img: "/Photos/6.jpg" }];





  return (
    <>
      <div className='h-44'></div>
      <div className=" my-5 w-full flex flex-col md:flex-row md:space-x-10 md:space-y-0 gap-6">
        <aside className="bg-black  px-5  rounded-2xl  ">
          <div className='relative '>
            <div className=" w-48 absolute left-[50%]  transform -translate-x-[50%] drop-shadow-xl mx-auto -mt-[120px]">
              <PictureProfil />
            </div>
            <div className='py-20'>
              <SidebarTitle SideBarTitle="El Marzouki Otman" />
              <div className=' flex flex-col px-4 space-y-4'>
                <SidebarSubTittle SidebarSubtitle="Web/Mobile Entwickler" />
                <SocialNetworkComponent />
                <PersonalinfosComponent />

              </div>
            </div>
          </div>
        </aside>
        <main className=" px-5 py-10 flex flex-col w-full rounded-2xl bg-black space-y-5">
          <TitleContent title="Projekte" />
          <ul className=" flex w-full justify-start md:justify-end flex-wrap font-medium ">

            <li href="#" onClick={() => setOpenTab(1)} className={openTab === 1 ? "text-[#FA5252] mr-4 md:mx-4 cursor-pointer " : "mr-4 md:mx-4 cursor-pointer"}>
              Alle
            </li>
            <li href="#" onClick={() => setOpenTab(2)} className={openTab === 2 ? "text-[#FA5252] mr-4 md:mx-4 cursor-pointer " : "mr-4 md:mx-4 cursor-pointer "}>
              Web
            </li>
            <li href="#" onClick={() => setOpenTab(3)} className={openTab === 3 ? "text-[#FA5252] mr-4 md:mx-4  cursor-pointer" : "mr-4 md:mx-4  cursor-pointer"}>
              Mobile
            </li>
          </ul>
          <div className="p-2">
            <div className={openTab === 1 ? " grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between " : "hidden"}>
              <div className=' flex flex-col border border-gray-700 shadow-sm shadow-gray-700 rounded-lg  p-2 '>
                <ImageSlider slides={WebAppFotos} />

                <div className=' flex flex-col text-lg text-white p-2'>
                  <p className='text-gray-400 text-sm'> Dashboard </p>
                  <p className='text-white text-lg font-medium'> Verein Verwaltung </p>
                </div>

              </div>
              <div className=' flex flex-col  border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg  p-2'>
                <ImageSlider slides={MobileAppFotos} />
                <div className=' flex flex-col text-lg text-white p-2'>
                  <p className='text-gray-400 text-sm'> palmarosa </p>
                  <p className='text-white text-lg font-medium'> Kosmetische App </p>
                </div>
              </div>


            </div>
            <div className={openTab === 2 ? "grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between " : "hidden"}>
            <div className=' flex flex-col border border-gray-700 shadow-sm shadow-gray-700 rounded-lg  p-2 '>
                <ImageSlider slides={WebAppFotos} />

                <div className=' flex flex-col text-lg text-white p-2'>
                  <p className='text-gray-400 text-sm'> Dashboard </p>
                  <p className='text-white text-lg font-medium'> Verein Verwaltung </p>
                </div>

              </div>
            </div>
            <div className={openTab === 3 ? "grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between " : "hidden"}>
            <div className=' flex flex-col  border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg  p-2'>
                <ImageSlider slides={MobileAppFotos} />
                <div className=' flex flex-col text-lg text-white p-2'>
                  <p className='text-gray-400 text-sm'> palmarosa </p>
                  <p className='text-white text-lg font-medium'> Kosmetische App </p>
                </div>
              </div>
            </div>

          </div>

        </main>

      </div>





    </>
  )
}
