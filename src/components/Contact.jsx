const Contact = () => (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  