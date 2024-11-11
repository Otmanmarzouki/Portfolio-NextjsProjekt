import { useState } from 'react';

export const useForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
   let { name, value } = e.target;
    if (name === 'Name') setName(value);
    if (name === 'Email') setEmail(value);
    if (name === 'Message') setMessage(value);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return { name, email, message, handleChange, resetForm };
};
