import { Button } from "react-scroll";

const Contact = () => (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="flex items-center justify-evenly">
        <h2 className="text-3xl text-center font-bold mb-6">Contact Me</h2>
        <form className="">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 text-sm border border-gray-300 rounded"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 text-sm border border-gray-300 rounded"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Message"
            className="w-full p-2 mb-4 text-sm border border-gray-300 rounded"
            rows={4}
          />
          <Button className="bg-blue-600 text-white px-4 py-2 rounded">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  