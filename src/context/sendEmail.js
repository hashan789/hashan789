import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export const sendEmail = (form, loading) => {

    emailjs
      .sendForm('service_cc4lm1n', 'template_18x9els', form.current, {
        publicKey: '3c_W_Y6qDEgm_hNVI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Email sent successfully!")
          loading = false
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Failed to sent")
          loading = false
        },
      );

      return loading
  };