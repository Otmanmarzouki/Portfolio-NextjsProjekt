

import ResumeSection from '../Resume/ResumeSection/index';
import SectionTitle from '@/commons/Title';

export default function Resume() {
  const educationIcon = (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path>
    </svg>
  );

  const experienceIcon = (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
    </svg>
  );

  const educationData = [
    { date: '09.2015 – 06.2017', position: 'IT-Entwickler', description: 'In zwei Jahren erwarb ich Kenntnisse in verschiedenen Programmiersprachen, darunter Java SE und PHP, und konnte so eine solide Grundlage in der Softwareentwicklung und Backend-Programmierung aufbauen.', bg: 'bg-rose-50' },
    { date: '09.2010 – 09.2013', position: 'Ausbildung als Fluggeräteelektroniker', description: '', bg: 'bg-pink-100' },
    { date: '09.2008 – 06.2009', position: 'Abitur : Physik und Chemie', description: '', bg: 'bg-rose-50' },
  ];
  
  const experienceData = [
    { date: '10.2021 – 12.2021', position: 'Praktikum : Full Stack Entwickler', description: '- Anwendungsprogrammierung (primär mithilfe von LARAVEL) im Kundenauftrag', bg: 'bg-sky-50' },
    { date: '10.2021 – 12.2021', position: 'Praktikum : Full Stack Entwickler', description: '- Anwendungsprogrammierung (primär mithilfe von LARAVEL) im Kundenauftrag', bg: 'bg-indigo-100' },
    { date: '10.2021 – 12.2021', position: 'Praktikum : Mobile Entwickler', description: '- Erstellung einer mobilen Anwendung mit React Native', bg: 'bg-sky-50' },
  ];
  
  

  return (
    <section className="flex flex-col w-full bg-white dark:bg-[#111111] rounded-2xl space-y-5 p-4">
 <SectionTitle text="Lebenslauf" />
      <div className="flex lg:flex-row flex-col gap-8 p-4">
        <ResumeSection icon={educationIcon} title="Schule & Studium" items={educationData} />
        <ResumeSection icon={experienceIcon} title="Berufliche Stationen" items={experienceData} />
      </div>
    </section>
  );
}
