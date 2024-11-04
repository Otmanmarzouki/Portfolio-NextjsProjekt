
import { useEffect } from "react";

export default function TabSelector({ openTab, setOpenTab }) {
    const tabs = [
      { id: 1, label: 'Alle' },
      { id: 2, label: 'Web' },
      { id: 3, label: 'Mobile' }
    ];

 function setTabs(id){
   setOpenTab(id)
   console.log(id)
}

    return (
      <ul className="flex w-full justify-start md:justify-end flex-wrap font-medium">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => setTabs(tab.id)}
            className={`${openTab === tab.id ? 'text-[#FA5252]' : 'text-white'} mr-4 md:mx-4 cursor-pointer`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    );
  }
  