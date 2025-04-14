import { Button } from "react-scroll";
import logo from '../images/contact_image.png';

const Contact = () => (
    <section id="contact" className="flex items-center justify-center py-20 text-white">
      <div className="container max-sm:block flex items-center justify-around rounded-lg bg-gray-500" style={{ backgroundImage : `url(${logo})` , backgroundPositionY : 'center' , }}>
      <div className="w-6/12 max-sm:hidden bg-no-repeat bg-cover bg-center bg-opacity-50 space-x-5">
        <p className="text-6xl font-bold mb-5 text-center">Gives Best</p>
        <p className="text-sm mb-5">Have a question, project idea, or collaboration opportunity? Feel free to reach out! Whether you want to discuss Microsoft Azure solutions, AI-driven applications, React.js development, or machine learning projects, I’d love to hear from you. Fill out the form below, and I’ll get back to you as soon as possible.</p>
        <p className="text-sm">Let{"’"}s build something amazing together! 🚀</p>
      </div>
      <div className="w-6/12 max-sm:w-full block p-20">
        <h2 className="text-3xl text-center font-bold mb-6">Contact Me</h2>
        <form className="">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-2 mb-4 text-sm border border-gray-300 rounded"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder=""
            className="w-full p-2 mb-4 text-sm border border-gray-300 rounded"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder=""
            className="w-full p-2 mb-4 text-sm border border-gray-300 rounded"
            rows={1}
          />
          <Button className="bg-white text-blue-600 font-bold px-4 py-2 rounded max-sm:w-full max-sm:text-center">
            Send Message
          </Button>
        </form>
        </div>
      </div>
    </section>
  );
  
  export default Contact;
  