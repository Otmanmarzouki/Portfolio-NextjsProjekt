import { useState } from 'react';
import ContactBoxComponent from '../components/ContactBoxComponent';
import InputComponent from '../components/InputComponent';
import EmailTitleComponent from '../components/EmailTitleComponent';
import EmailSubmitButtonComponent from '../components/EmailSubmitButtonComponent';
import SectionTitle from '@/commons/Title';
import emailjs from 'emailjs-com';

export default function ContactComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const serviceId = "service_b5rtnul";
  const templateId = "template_r0310v6";
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
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch(() => {
      setStatusMessage('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section className="flex flex-col w-full bg-black rounded-2xl space-y-6 p-6">
      <SectionTitle text="Kontakt" />
      
      <div className="flex lg:flex-row  w-full flex-col gap-6">
        <ContactBoxComponent ContactTitle="Phone :" ContactDescription="+212644469203" />
        <ContactBoxComponent ContactTitle="Email :" ContactDescription="Marzouki53@gmail.com" />
      </div>
      
      <div className="dark:border-[#212425] dark:border-2 mb-16 p-8 rounded-xl bg-gray-800">
        <div className="flex flex-col w-full gap-8">
          <EmailTitleComponent 
            firstText="Ich bin immer offen für die Diskussion von Projekten" 
            secondText="Designarbeit oder Partnerschaften."
          />
          
          <div className="flex flex-col w-full gap-6">
            <InputComponent 
              name="Name" 
              label="Name *" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
            <InputComponent 
              name="email" 
              label="Email *" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              type="email"
            />
            <InputComponent 
              name="message" 
              label="Message *" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
              textarea
            />
          </div>
          
          <div className="flex justify-start">
            <EmailSubmitButtonComponent onClick={sendMail} />
          </div>

          {statusMessage && (
            <div 
              className={`mt-4 ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'} font-semibold`}
            >
              {statusMessage}
            </div>
          )}

          {isLoading && (
            <div className="mt-4 text-white animate-pulse">Sending...</div>
          )}
        </div>
      </div>
    </section>
  );
}
