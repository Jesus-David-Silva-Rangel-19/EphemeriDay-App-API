
import { Heart, Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-white/80 backdrop-blur-md border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-sm font-labrada text-gray-600 flex items-center gap-2">
          Desarrollado con <Heart className="w-4 h-4 text-red-500 animate-pulse" /> por Jesús David Silva Rangel{" "}
          <Rocket className="w-4 h-4 text-day" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
