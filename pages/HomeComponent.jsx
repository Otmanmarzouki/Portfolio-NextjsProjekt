import Title from '../commons/Title';
import HomeDescriptionComponent from '../components/HomeDescriptionComponent';
import WebIcon from '@/components/Home/Icons/WebIcon';
import MobileIcon from '@/components/Home/Icons/MobileIcon';

export default function HomeComponent() {
  const Description = `Ich bin Entwickler mit einem Schwerpunkt auf benutzerfreundliche, responsive Anwendungen. Ich liebe es, komplexe Probleme in intuitive Lösungen zu verwandeln.
  Mit einer Leidenschaft fürs Lernen entdecke ich ständig neue Technologien, um meine Fähigkeiten zu verbessern und innovative Ergebnisse zu liefern.`;

  const expertiseItems = [
    {
      Icon: <WebIcon />,
      title: 'Web Entwicklung',
      description: 'Erstellung von Webseiten mit Laravel und Nextjs',
    },
    {
      Icon: <MobileIcon />,
      title: 'App Entwicklung',
      description: 'Erstellung von mobilen Anwendungen mit React Native',
    },
  ];

  return (
    <section className="flex flex-col w-full bg-[#111111] rounded-2xl space-y-5 p-4">
      <Title text="Über Mich" />
      <HomeDescriptionComponent description={Description} />
      <h1 className="text-2xl font-bold text-center">Was ich mache!</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {expertiseItems.map((item, index) => (
          <div key={index} className="flex flex-col border border-gray-700 shadow-sm shadow-gray-700 rounded-lg py-4 px-4 w-full">
  
            <div className="flex  mb-2">
              <div className="mr-2 ">{item.Icon}</div>
              <h6 className="font-bold flex justify-center items-center">{item.title}</h6>
            </div>
            
            {/* Expertise Description Section */}
            <p className="text-sm text-gray-400">- {item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
