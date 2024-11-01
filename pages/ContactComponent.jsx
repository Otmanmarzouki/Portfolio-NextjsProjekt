 import { useState } from 'react'
import PictureProfil from '../component/PictureProfilComponent'
import TitleContent from '../component/TitleContent'

import ContactBoxComponent from '../component/ContactBoxComponent'
import SidebarTitle from '../component/SidebarTitle'
import SidebarSubTittle from '../component/SidebarSubTittle'
import SocialNetworkComponent from '../component/SocialNetworkComponent'
import PersonalinfosComponent from '../component/PersonalinfosComponent'
import InputComponent from '../component/InputComponent'
import EmailTitleComponent from '../component/EmailTitleComponent'
import EmailSubmitButtonComponent from '../component/EmailSubmitButtonComponent'




export default function ContactComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const serviceId = "service_b5rtnul"
  const templateId ="template_r0310v6"
  const publicKey = "vWEDIpw0zrVFznPUR"
  



 function sendMail(){
  emailjs.send(serviceId,templateId,{
    from_name: name,
    to_name: "otman",
    message: message,
    reply_to:email ,
    },publicKey);
 }

  return (
    <>
      <div className='h-44'></div>
      <div className=" my-5 w-full flex flex-col md:flex-row  gap-8">
        <aside className="bg-black  px-5 rounded-2xl ">
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
          <TitleContent title="Kontakt" />
          <div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mb-[40px] grid gap-x-5 gap-y-7' >
            <ContactBoxComponent ContactTitle='Phone :' ContactDescription='+212644469203' />
            <ContactBoxComponent ContactTitle='Email :' ContactDescription='Marzouki53@gmail.com' />
          </div>
          <div className='  dark:border-[#212425] dark:border-2 mb-16  md:p-[48px] p-4  rounded-xl md:mb-[60px]"'>
          <div className='flex flex-col w-full gap-6 '>
              
             <EmailTitleComponent firstText='Ich bin immer offen für die Diskussion von Projekten' secondText='Designarbeit oder Partnerschaften.'/>
            <div className='flex flex-row w-full justify-center'>
             
            <InputComponent name='Name' label="Name *"   value={name}  onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='flex flex-row w-full justify-center'>
            <InputComponent name='email' label="email *"  value={email}  onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='flex flex-row w-full justify-center'>
              <InputComponent name='message' label="Message *" value={message}  onChange={(e)=>setMessage(e.target.value)} />
            </div>
            <div className='flex flex-row w-full justify-start'>
              <EmailSubmitButtonComponent onClick={sendMail} />
            </div>

          </div>
          </div>

        </main>

      </div>





    </>
  )
}
