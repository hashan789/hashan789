
import logo from '../images/footer_image.png';
import { useState } from "react";
import { useEmailState } from "../stores/useEmailState";
import toast, { Toaster } from "react-hot-toast";
import useInView from '../hooks/useInView';

function Contact () {

  const [ email, setEmail ] = useState({
    email: "",
    message: "",
    name: ""
  })

  const [ref, setInView] = useInView({ threshold : 0.5 })

  const { loading, sendEmail } = useEmailState();

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail(email);

    if(!email.name || !email.email || !email.message){
      toast.error("Please fill all the fields");
      return;
    }
    
  }

  return(
  <section id="contact" className="flex items-center justify-center py-20 text-white">
      <div ref={ref} className={`container max-sm:block flex items-center justify-around lg:rounded-lg bg-gray-500 transition-all duration-1000 ${ setInView ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage : `url(${logo})` , backgroundPositionY : 'center' , }}>
      <div className="w-6/12 max-sm:hidden bg-no-repeat bg-cover bg-center bg-opacity-50 space-x-5">
        <p className="text-6xl font-bold mb-5 text-center">Gives Best</p>
        <p className="text-sm mb-5">Have a question, project idea, or collaboration opportunity? Feel free to reach out! Whether you want to discuss Microsoft Azure solutions, AI-driven applications, React.js development, or machine learning projects, I’d love to hear from you. Fill out the form below, and I’ll get back to you as soon as possible.</p>
        <p className="text-sm">Let{"’"}s build something amazing together! 🚀</p>
      </div>
      <div className="w-6/12 max-sm:w-full block p-20">
        <h2 className="text-3xl text-center font-bold mb-6">Contact Me</h2>
        <form className="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder=""
            className="w-full p-2 mb-4 text-sm border border-gray-300 rounded"
            onChange={(e) => setEmail({ ...email, name: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder=""
            className="w-full p-2 mb-4 text-sm border border-gray-300 rounded"
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder=""
            className="w-full p-2 mb-4 text-sm text-black border border-gray-300 rounded"
            onChange={(e) => setEmail({ ...email, message: e.target.value })}
            rows={1}
          />
          <button className={`bg-white text-workspace-dark font-bold px-4 py-2 rounded max-sm:w-full max-sm:text-center`}>
           {
            loading ? "Sending" : 'Send Message'
           } 
          </button>
        </form>
        </div>
      </div>

      <Toaster />
    </section>
  );
} 
  
  export default Contact;
  