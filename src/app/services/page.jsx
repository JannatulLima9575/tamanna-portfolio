import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#d5fdf9]">
      {/* Hero Section শুধু পেজের জন্য */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What I <span className="text-[#007F73]">Offer</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional web development services tailored to your needs. From
            frontend to backend, I deliver quality solutions.
          </p>
        </div>
      </div>

      {/* আপনার আসল Services কম্পোনেন্ট - কিন্তু title hide করব */}
      <div className="container mx-auto px-4">
        <Services hideTitle={true} />
      </div>

      {/* Additional CTA Section */}
      <div className="bg-white mt-16 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-6">
            Let's discuss your project and bring your ideas to life.
          </p>
          <button
            className="bg-[#007F73] text-white px-6 py-3 rounded-lg font-semibold
                           hover:bg-[#00665c] transition-colors duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
