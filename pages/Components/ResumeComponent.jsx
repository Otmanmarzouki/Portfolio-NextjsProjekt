
import PictureProfil from './PictureProfilComponent'
import TitleContent from './TitleContent'

import ResumeTitleComponent from './ResumeTitleComponent'
import ResumeBoxComponent from './ResumeBoxComponent'

import SidebarTitle from './SidebarTitle'
import SidebarSubTittle from './SidebarSubTittle'
import SocialNetworkComponent from './SocialNetworkComponent'
import PersonalinfosComponent from './PersonalinfosComponent'


export default function ResumeComponent() {

  
  const educationIcon = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path></svg>;

  const ExperienceIcon = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path></svg>;


  return (
    <>
      <div className='h-44'></div>

      <div className=" my-5 w-full flex flex-col md:flex-row md:space-x-10 md:space-y-0">
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
        <main className="md:w-2/3 lg:w-3/4 px-5 py-10 flex flex-col rounded-2xl bg-black space-y-10">

          <TitleContent title="Lebenslauf" />
          
          
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8' >
            <div className='  flex flex-col  md:w-full sm:w-full  space-y-4'>
              <ResumeTitleComponent RsumeIcon={educationIcon} ResumeTitle='Schule & Studium' />
              <div className=' w-full  border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg  py-2'>
                <ResumeBoxComponent  ResumeDate='09.2015 – 06.2017' ResumePoste='IT-Entwickler' ResumeDescription='Ich lernte verschiedene Programmiersprachen „JAVA SE, PHP“.' />

              </div>
              <div className=' w-full  border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg  py-2'>
                <ResumeBoxComponent  ResumeDate='09.2010 – 09.2013' ResumePoste='Ausbildung als Fluggeräteelektroniker' ResumeDescription='' />

              </div>
              <div className=' w-full  border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg  py-2'>
                <ResumeBoxComponent  ResumeDate='09.2008 – 06.2009' ResumePoste='Abitur : Physik und Chemie' ResumeDescription='' />

              </div>


            </div>

            <div className=' flex flex-col   md:w-full sm:w-full   space-y-4 '>
            <ResumeTitleComponent RsumeIcon={ExperienceIcon} ResumeTitle='Berufliche Stationen' />
              <div className='w-full border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg'>
              <ResumeBoxComponent  ResumeDate='10.2021 – 12.2021' ResumePoste='Praktikum : Full Stack Entwickler ' ResumeDescription='
              - Anwendungsprogrammierung (primär mithilfe von LARAVEL) im Kundenauftrag' />
              </div>
              <div className='w-full border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg'>
              <ResumeBoxComponent  ResumeDate='10.2021 – 12.2021' ResumePoste='Praktikum : Full Stack Entwickler ' ResumeDescription='
              - Anwendungsprogrammierung (primär mithilfe von LARAVEL) im Kundenauftrag' />
              </div>
              <div className='w-full border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg'>
              <ResumeBoxComponent  ResumeDate='10.2021 – 12.2021' ResumePoste='Praktikum : Mobile Entwickler ' ResumeDescription="
              - Erstellung eine mobile Anwendung mit React Native 
              " />
              </div>
            </div>


          </div>


        </main>

      </div>





    </>
  )
}
