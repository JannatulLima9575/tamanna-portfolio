export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <h2 className="text-center text-5xl font-bold text-[#007F73] mb-10">
        Contact Me
      </h2>
      <form className="max-w-3xl mx-auto text-center">
        <div className="flex flex-wrap gap-4 justify-center">
          <input
            type="text"
            placeholder="Full Name"
            className="border-2 border-[#007F73] p-3 rounded-lg w-[48%]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border-2 border-[#007F73] p-3 rounded-lg w-[48%]"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="border-2 border-[#007F73] p-3 rounded-lg w-[48%]"
          />
          <input
            type="text"
            placeholder="Email Subject"
            className="border-2 border-[#007F73] p-3 rounded-lg w-[48%]"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Your Message"
          className="border-2 border-[#007F73] p-3 rounded-lg w-full mt-4"
        ></textarea>
        <button className="mt-6 bg-[#007F73] text-white py-3 px-8 rounded-full hover:shadow-lg transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
