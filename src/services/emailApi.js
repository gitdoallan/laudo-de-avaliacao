// import axios from 'axios';
import emailjs from '@emailjs/browser';

export const emailApi = (formInput) => {
  emailjs.init('_Hdz7eeE_5m0IG6qC');
  console.log(formInput);
  const { name, email, phone, neighborhood, categories } = formInput;
  const categoriesStr = categories.join(', ');

  const templateParams = { name, email, phone, neighborhood, categories: categoriesStr };
 
  emailjs.send('default_service', 'template_qa3x0w5', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
    
};
