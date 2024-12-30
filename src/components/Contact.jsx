import { Button } from "react-scroll";
import logo from '../images/custom_gpt_image1.png';

const Contact = () => (
    <section id="contact" className="flex items-center justify-center py-20 bg-gray-200">
      <div className="container flex items-center justify-around rounded-lg bg-gray-500">
      <div className="w-6/12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage : `url(${logo})` , height : '600px' }}>
        {/* <img src={logo} alt={'logo'} width={1000} height={1000} /> */}
      </div>
      <div className="w-6/12 block p-20">
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
            rows={4}
          />
          <Button className="bg-white text-blue-600 font-bold px-4 py-2 rounded">
            Send Message
          </Button>
        </form>
        </div>
      </div>
    </section>
  );
  
  export default Contact;
  