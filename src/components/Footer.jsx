import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#d5fdf9] py-10 text-center">
      <div className="flex justify-center gap-6 text-[#007F73] text-2xl mb-4">
        {[FaLinkedin, FaFacebook, FaTwitter, FaInstagram].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="border-2 border-[#007F73] rounded-full p-2 hover:bg-[#007F73] hover:text-white transition"
          >
            <Icon />
          </a>
        ))}
      </div>
      <p className="text-base">© Tamanna Akter - All Rights Reserved</p>
    </footer>
  );
}
