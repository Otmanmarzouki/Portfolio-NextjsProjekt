import PictureProfil from '../PictureProfilComponent';
import TitleContent from '../TitleContent';
import SocialNetworkComponent from '../SocialNetworkComponent';
import PersonalInfosComponent from '../PersonalinfosComponent'; 

export default function Sidebar() {
  return (
    <aside className="bg-black w-64 p-6 rounded-2xl h-full md:h-screen flex flex-col items-center space-y-4 overflow-y-auto custom-scrollbar">
      <div className="w-40 drop-shadow-xl mt-4">
        <PictureProfil />
      </div>
      <div className="text-center space-y-3">
        <TitleContent title="El Marzouki Otmane" subtitle="Web/Mobile Entwickler" />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <SocialNetworkComponent />
        <PersonalInfosComponent />
      </div>
    </aside>
  );
}
