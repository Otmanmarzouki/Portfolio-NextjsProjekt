import PictureProfil from '../PictureProfilComponent';
import TitleContent from '../TitleContent';
import SocialNetworkComponent from '../SocialNetworkComponent';
import PersonalInfosComponent from '../PersonalinfosComponent'; 

export default function Sidebar() {
  return (
    <aside className="bg-black w-64 px-5 rounded-2xl h-full md:h-screen"> 
      <div className="relative">
        <div className="w-40 mx-auto drop-shadow-xl mt-4">
          <PictureProfil />
        </div>
        <div className="py-4">
          <TitleContent title="El Marzouki Otmane" subtitle="Web/Mobile Entwickler" />
          <div className="flex flex-col px-4 space-y-4">
            <SocialNetworkComponent />
            <PersonalInfosComponent />
          </div>
        </div>
      </div>
    </aside>
  );
}
