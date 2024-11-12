import Title from '@/commons/Title';
import Description from '@/components/Home/Description';
import ExpertiseCard from '@/components/Home/ExpertiseCard';
import WebIcon from '@/public/Photos/web.png';
import MobileIcon from '@/public/Photos/mobile.png';

export default function Home() {
  const description =`Ich bin Entwickler mit einem Schwerpunkt auf benutzerfreundliche, responsive Anwendungen. Ich liebe es, komplexe Probleme in intuitive Lösungen zu verwandeln.

       Mit einer Leidenschaft fürs Lernen entdecke ich ständig neue Technologien, um meine Fähigkeiten zu verbessern und innovative Ergebnisse zu liefern.`;

  return (
    <section className="flex flex-col w-full bg-[#111111] rounded-2xl space-y-5 p-4">
        
      <Title text="Über Mich" />
     
      
      <Description description={description} />
      <h1 className="text-2xl font-bold  text-white">Was ich mache!</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-6">
        <ExpertiseCard 
          Icon={WebIcon} 
          title="Web Entwicklung" 
          description="Erstellung von Webseiten mit Laravel und Next.js"
          width={50}
          height={50} 
        />
        
        <ExpertiseCard 
          Icon={MobileIcon} 
          title="Mobile Entwicklung" 
          description="Erstellung von mobilen Anwendungen mit React Native"
          width={50}
          height={50} 
        />
      </div>
    </section>
  );
}
