import PictureProfil from '../PictureProfilComponent';
import SocialNetworkComponent from '../SocialNetworkComponent';
import PersonalInfosComponent from '../PersonalinfosComponent'; 

export default function Sidebar() {
  return (
    <section className="flex flex-col items-center bg-[#111111] p-8 rounded-lg w-full lg:w-1/3">
    <PictureProfil />
    <h2 className="text-xl font-bold mt-4">El Marzouki Otmane</h2>
    <p className="text-gray-400 mb-4">Web/Mobile Entwickler</p>
    <div className="flex space-x-4 mb-6">
      <SocialNetworkComponent/>
    </div>
    <div className="flex w-full space-y-2">
      <PersonalInfosComponent/>
    </div>
  </section>
  );
}
