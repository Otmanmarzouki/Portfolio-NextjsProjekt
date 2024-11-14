import PictureProfil from '../PictureProfilComponent';
import SocialNetworkComponent from '../SocialNetworkComponent';
import PersonalInfosComponent from '../PersonalinfosComponent'; 

export default function Sidebar() {
  return (
    <section className="flex flex-col items-center bg-white dark:bg-[#111111] p-8 rounded-lg w-full lg:w-1/3">
    <PictureProfil />
    <h2 className="text-xl font-bold mt-4 text-gray-700 dark:text-white"> Marzouki Otmane</h2>
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Web/Mobile Entwickler</p>
    <div className="flex space-x-4 mb-6">
      <SocialNetworkComponent />
    </div>
    <div className="flex w-full space-y-2">
      <PersonalInfosComponent />
    </div>
    <a
  href="/documents/Lebenslauf.pdf"
  download
  className="inline-flex items-center mx-auto bg-gradient-to-r duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-2 text-sm text-white rounded-[35px] mt-6"
>
  CV Herunterladen
</a>
  </section>
  );
}
