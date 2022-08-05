// import axios from 'axios';
import emailjs from '@emailjs/browser';

export const emailApi = async (formInput) => {
  emailjs.init('_Hdz7eeE_5m0IG6qC');
  const { name, email, phone, neighborhood, categories } = formInput;
  const categoriesStr = categories.join(', ');

  const templateParams = { name, email, phone, neighborhood, categories: categoriesStr };
 
  return emailjs.send('default_service', 'template_qa3x0w5', templateParams);
};
