export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white px-4 sm:px-6"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#007F73] mb-3">
          Contact Me
        </h2>
        <div className="w-16 h-0.5 bg-[#007F73] mx-auto" />
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Have a project in mind or want to collaborate?  
          Feel free to reach out.
        </p>
      </div>

      {/* Form */}
      <form className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-teal-100 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Email Subject"
            className="input-field"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Your Message"
          className="input-field mt-5 resize-none"
        />

        <div className="text-center">
          <button
            type="submit"
            className="mt-8 inline-flex items-center justify-center
                       bg-[#007F73] text-white px-10 py-3 rounded-full
                       font-semibold hover:bg-[#00665c]
                       transition-all duration-300
                       hover:scale-[1.03] shadow-sm"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}