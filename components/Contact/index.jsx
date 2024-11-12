import { useState } from 'react';
import ContactCard from '../Contact/ContactCard';
import Inputs from '../Contact/Inputs';
import Title from '../Contact/Title';
import SendButton from '../Contact/Button';
import SectionTitle from '@/commons/Title';
import emailjs from 'emailjs-com';
import { useForm } from '../../hooks/useForm';
import { useStatus } from '../../hooks/useStatus';

export default function Contact() {
  const { name, email, message, handleChange, resetForm } = useForm(); 
  const { statusMessage, setStatusMessage, isLoading, setIsLoading } = useStatus();

  const serviceId = "service_b5rtnul";
  const templateId = "template_tu3jxku";
  const publicKey = "vWEDIpw0zrVFznPUR";

  const sendMail = () => {
    if (!name || !email || !message) {
      setStatusMessage("Please fill all fields.");
      return;
    }

    setIsLoading(true);
    setStatusMessage('');

    emailjs.send(serviceId, templateId, {
      from_name: name,
      to_name: "otman",
      message: message,
      reply_to: email,
    }, publicKey)
      .then(() => {
        setStatusMessage('Message sent successfully!');
        resetForm();
      })
      .catch(() => {
        setStatusMessage('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="flex flex-col w-full bg-[#111111]  rounded-2xl space-y-5 p-4">
      <SectionTitle text="Kontakt" />
      <div className="flex flex-col  w-full lg:flex-row gap-4 ">
        <ContactCard ContactTitle="Phone:" ContactDescription="+212644469203" />
        <ContactCard ContactTitle="Email:" ContactDescription="Marzouki53@gmail.com" />
      </div>

      <div className="border-[#212425] border-2 mb-16 p-6 sm:p-8 rounded-xl   ">
        <div className="flex flex-col w-full gap-4 sm:gap-6">
          <Title
            firstText="Ich bin immer offen für die Diskussion von Projekten"
            secondText="Designarbeit oder Partnerschaften."
          />
          <div className="flex flex-col w-full gap-4">
            <Inputs name="Name" label="Name *" value={name} onChange={handleChange} required />
            <Inputs name="Email" label="Email *" value={email} onChange={handleChange} required type="email" />
            <Inputs name="Message" label="Message *" value={message} onChange={handleChange} required textarea />
          </div>

        
          <div className="flex justify-end mt-4">
            <SendButton onClick={sendMail} />
          </div>
          {statusMessage && (
            <div className={`mt-4 ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'} font-semibold`}>
              {statusMessage}
            </div>
          )}

        
          {isLoading && <div className="mt-4 text-white animate-pulse">Sending...</div>}
        </div>
      </div>
    </section>
  );
}
