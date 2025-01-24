import { Button } from "react-scroll";
import logo from '../images/contact_image.png';

const Contact = () => (
    <section id="contact" className="flex items-center justify-center py-20 bg-gray-200 text-white">
      <div className="container max-sm:block flex items-center justify-around rounded-lg bg-gray-500" style={{ backgroundImage : `url(${logo})` , backgroundPositionY : 'center' , }}>
      <div className="w-6/12 max-sm:none bg-no-repeat bg-cover bg-center">
        {/* <img src={logo} alt={'logo'} width={1000} height={1000} /> */}
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
  