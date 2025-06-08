import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative ">
      {/* Cyan background image under the footer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{        backgroundImage: `url('/3d-rendering-abstract-black-white-background.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",}}
      ></div>

      {/* Glassmorphic Footer */}
      <div className="relative z-10  text-cyan-400 transition-all duration-500 bg-gray-500/10 border border-white/30 shadow-lg">
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Info Section */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold">Jimoh Olamide</h1>
              <p className="text-sm text-cyan-200 mt-2 max-w-md">
              Don&apos;t be a stranger—reach out anytime.
             
              </p>
              <p className="text-sm text-cyan-200 max-w-md">
              Let&apos;s chat—big ideas start small.
             
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/StackAlchemist"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform transform hover:scale-110 hover:drop-shadow-lg"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/jimoholamide"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform transform hover:scale-110 hover:drop-shadow-lg"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/jaeseven7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform transform hover:scale-110 hover:drop-shadow-lg"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
