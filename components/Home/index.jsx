import Title from '@/commons/Title';
import Description from '@/components/Home/Description';
import ExpertiseCard from '@/components/Home/ExpertiseCard';
import WebIcon from '@/public/Photos/web.png';
import MobileIcon from '@/public/Photos/mobile.png';
import Skills from '@/components/Home/Skills';

export default function Home() {
  const description =`Ich bin Entwickler mit einem Schwerpunkt auf benutzerfreundliche, responsive Anwendungen. Ich liebe es, komplexe Probleme in intuitive Lösungen zu verwandeln.
       Mit einer Leidenschaft fürs Lernen entdecke ich ständig neue Technologien, um meine Fähigkeiten zu verbessern und innovative Ergebnisse zu liefern.`;

  return (
    <section className="flex flex-col w-full bg-white dark:bg-[#111111] rounded-2xl space-y-5 p-4">
      <Title text="Über Mich" />
      <Description description={description} />
      <h1 className="text-2xl font-bold  text-black  dark:text-white">Was ich mache!</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-6">
        <ExpertiseCard 
          Icon={WebIcon} 
          title="Web Entwicklung" 
          description="Ich entwickle moderne, performante Webseiten mit Laravel und Next.js. Laravel ermöglicht mir eine effiziente Backend-Entwicklung mit robusten Funktionen und APIs. Mein Fokus liegt auf einer nahtlosen Integration beider Technologien, um benutzerfreundliche und leistungsstarke Webanwendungen zu liefern"
          width={50}
          height={50} 
          bg="bg-sky-100"
        />
        
        <ExpertiseCard 
          Icon={MobileIcon} 
          title="Mobile Entwicklung" 
          description="Ich entwickle plattformübergreifende mobile Apps mit React Native, wodurch eine einzige Codebasis für iOS und Android möglich ist. Dabei lege ich Wert auf eine responsive Benutzeroberfläche, hohe Leistung und die Integration nativer Funktionen für ein erstklassiges Nutzererlebnis."
          width={50}
          height={50} 
          bg="bg-indigo-100"
        />
      </div>
      <div>
      <Skills/>
      </div>
    </section>
  );
}
