
import PictureProfil from '../component/PictureProfilComponent'
import TitleContent from '../component/TitleContent'
import HomeDescriptionComponent from '../component/HomeDescriptionComponent'
import ExpertiseBoxComponent from '../component/ExpertiseBoxComponent'
import ExpertiseTitleComponent from '../component/ExpertiseTitleComponent'
import SidebarTitle from '../component/SidebarTitle'
import SidebarSubTittle from '../component/SidebarSubTittle'
import SocialNetworkComponent from '../component/SocialNetworkComponent'
import PersonalinfosComponent from '../component/PersonalinfosComponent'


export default function HomeComponent() {

  const Description = ` Hi ! . Ich heiße El Marzouki Otman . Nach ein paar Jahre im Bereich Luftfahrt als Fluggerätelektroniker habe ich mich dafür entschieden , einen anderen Weg einzuschlagen .
   Ich habe eine zweijährige Ausbildung im Bereich IT gemacht und auch in meiner Freizeit habe ich mich weiteretwicklt . Durch zwei Praktika konnte ich Erfahrung sowohl in Mobileentwicklung als auch in Webentichklung sammeln.`
  const devWebIcon = <svg width="40" height="35" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3594 41L15.3125 40.0625C15.1562 40.0104 15.026 39.9062 14.9219 39.75C14.8698 39.6458 14.8438 39.4896 14.8438 39.2812L25.8594 1.46875C25.9115 1.3125 26.0156 1.18229 26.1719 1.07812C26.3281 0.973958 26.4844 0.947917 26.6406 1L29.6875 1.9375C29.8438 1.9375 29.9479 2.01562 30 2.17188C30.1042 2.32812 30.1562 2.51042 30.1562 2.71875L19.1406 40.5312C19.0885 40.6875 18.9844 40.8177 18.8281 40.9219C18.6719 41.026 18.5156 41.0521 18.3594 41ZM11.875 31.5469L13.9844 29.2812C14.0885 29.125 14.1406 28.9688 14.1406 28.8125C14.1406 28.6042 14.0625 28.4479 13.9062 28.3438L5.625 21L13.9062 13.6562C14.0625 13.5521 14.1406 13.4219 14.1406 13.2656C14.1406 13.0573 14.0885 12.875 13.9844 12.7188L11.875 10.4531C11.7188 10.349 11.5625 10.2969 11.4062 10.2969C11.25 10.2969 11.0938 10.349 10.9375 10.4531L0.234375 20.5312C0.078125 20.6875 0 20.8438 0 21C0 21.1562 0.078125 21.3125 0.234375 21.4688L10.9375 31.5469C11.0938 31.651 11.25 31.7031 11.4062 31.7031C11.5625 31.7031 11.7188 31.651 11.875 31.5469ZM34.0625 31.5469L44.7656 21.4688C44.9219 21.3125 45 21.1562 45 21C45 20.8438 44.9219 20.6875 44.7656 20.5312L34.0625 10.4531C33.9062 10.349 33.75 10.2969 33.5938 10.2969C33.4375 10.2969 33.2812 10.349 33.125 10.4531L31.0156 12.7188C30.9115 12.875 30.8594 13.0573 30.8594 13.2656C30.8594 13.4219 30.9375 13.5521 31.0938 13.6562L39.375 21L31.0938 28.3438C30.9375 28.4479 30.8594 28.6042 30.8594 28.8125C30.8594 28.9688 30.9115 29.125 31.0156 29.2812L33.125 31.5469C33.2812 31.651 33.4375 31.7031 33.5938 31.7031C33.75 31.7031 33.9062 31.651 34.0625 31.5469Z" fill="#269FFF" />
  </svg>;

  const devAppIcon = <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44.0625 15.5C44.3229 15.5 44.5312 15.4219 44.6875 15.2656C44.8958 15.0573 45 14.8229 45 14.5625V8.9375C45 8.67708 44.8958 8.46875 44.6875 8.3125C44.5312 8.10417 44.3229 8 44.0625 8H38.4375C38.1771 8 37.9427 8.10417 37.7344 8.3125C37.5781 8.46875 37.5 8.67708 37.5 8.9375V10.5H30V8H31.5625C31.8229 8 32.0312 7.92188 32.1875 7.76562C32.3958 7.55729 32.5 7.32292 32.5 7.0625V1.4375C32.5 1.17708 32.3958 0.96875 32.1875 0.8125C32.0312 0.604167 31.8229 0.5 31.5625 0.5H25.9375C25.6771 0.5 25.4427 0.604167 25.2344 0.8125C25.0781 0.96875 25 1.17708 25 1.4375V3H7.5V1.4375C7.5 1.17708 7.39583 0.96875 7.1875 0.8125C7.03125 0.604167 6.82292 0.5 6.5625 0.5H0.9375C0.677083 0.5 0.442708 0.604167 0.234375 0.8125C0.078125 0.96875 0 1.17708 0 1.4375V7.0625C0 7.32292 0.078125 7.55729 0.234375 7.76562C0.442708 7.92188 0.677083 8 0.9375 8H2.5V20.5H0.9375C0.677083 20.5 0.442708 20.6042 0.234375 20.8125C0.078125 20.9688 0 21.1771 0 21.4375V27.0625C0 27.3229 0.078125 27.5573 0.234375 27.7656C0.442708 27.9219 0.677083 28 0.9375 28H6.5625C6.82292 28 7.03125 27.9219 7.1875 27.7656C7.39583 27.5573 7.5 27.3229 7.5 27.0625V25.5H15V28H13.4375C13.1771 28 12.9427 28.1042 12.7344 28.3125C12.5781 28.4688 12.5 28.6771 12.5 28.9375V34.5625C12.5 34.8229 12.5781 35.0312 12.7344 35.1875C12.9427 35.3958 13.1771 35.5 13.4375 35.5H19.0625C19.3229 35.5 19.5312 35.3958 19.6875 35.1875C19.8958 35.0312 20 34.8229 20 34.5625V33H37.5V34.5625C37.5 34.8229 37.5781 35.0312 37.7344 35.1875C37.9427 35.3958 38.1771 35.5 38.4375 35.5H44.0625C44.3229 35.5 44.5312 35.3958 44.6875 35.1875C44.8958 35.0312 45 34.8229 45 34.5625V28.9375C45 28.6771 44.8958 28.4688 44.6875 28.3125C44.5312 28.1042 44.3229 28 44.0625 28H42.5V15.5H44.0625ZM30 23V25.5H27.5V23H30ZM27.5 3H30V5.5H27.5V3ZM2.5 3H5V5.5H2.5V3ZM5 25.5H2.5V23H5V25.5ZM6.5625 20.5H5V8H6.5625C6.82292 8 7.03125 7.92188 7.1875 7.76562C7.39583 7.55729 7.5 7.32292 7.5 7.0625V5.5H25V7.0625C25 7.32292 25.0781 7.55729 25.2344 7.76562C25.4427 7.92188 25.6771 8 25.9375 8H27.5V20.5H25.9375C25.6771 20.5 25.4427 20.6042 25.2344 20.8125C25.0781 20.9688 25 21.1771 25 21.4375V23H7.5V21.4375C7.5 21.1771 7.39583 20.9688 7.1875 20.8125C7.03125 20.6042 6.82292 20.5 6.5625 20.5ZM17.5 33H15V30.5H17.5V33ZM37.5 28.9375V30.5H20V28.9375C20 28.6771 19.8958 28.4688 19.6875 28.3125C19.5312 28.1042 19.3229 28 19.0625 28H17.5V25.5H25V27.0625C25 27.3229 25.0781 27.5573 25.2344 27.7656C25.4427 27.9219 25.6771 28 25.9375 28H31.5625C31.8229 28 32.0312 27.9219 32.1875 27.7656C32.3958 27.5573 32.5 27.3229 32.5 27.0625V21.4375C32.5 21.1771 32.3958 20.9688 32.1875 20.8125C32.0312 20.6042 31.8229 20.5 31.5625 20.5H30V13H37.5V14.5625C37.5 14.8229 37.5781 15.0573 37.7344 15.2656C37.9427 15.4219 38.1771 15.5 38.4375 15.5H40V28H38.4375C38.1771 28 37.9427 28.1042 37.7344 28.3125C37.5781 28.4688 37.5 28.6771 37.5 28.9375ZM42.5 33H40V30.5H42.5V33ZM40 13V10.5H42.5V13H40Z" fill="#DDA10C" />
  </svg>;


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

          <TitleContent title="Über Mich" />
          <HomeDescriptionComponent description={Description} />
          <h1 className="text-2xl font-bold justify-center ">Was ich mache !</h1>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8' >
            <div className='  flex flex-col border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg  py-2  md:w-full sm:w-full '>
              <ExpertiseTitleComponent IconExpertise={devWebIcon} ExpertiseTitle='WEB ENTWICKLUNG' />
              <div className=' w-full'>
                <ExpertiseBoxComponent ExpertiseDescription='Erstellung von Webseiten mit Laravel und Nextjs' />

              </div>

            </div>

            <div className=' flex flex-col border  border-gray-700 shadow-sm shadow-gray-700 rounded-lg  py-2 md:w-full sm:w-full '>
              <ExpertiseTitleComponent IconExpertise={devAppIcon} ExpertiseTitle='APP ENTWICKLUNG' />
              <div className='w-full'>
                <ExpertiseBoxComponent ExpertiseDescription='Erstellung von mobilen Anwendungen mit React Native' />
              </div>
            </div>


          </div>


        </main>

      </div>





    </>
  )
}
