
import { CalendarDays } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-sm font-labrada text-gray-600 animate-fade-in">
            Apoyamos a Ucrania 🇺🇦 en la agresión rusa 🇷🇺
          </p>
          <div className="flex items-center gap-3">
            <CalendarDays className="w-8 h-8 text-ephemeri" />
            <h1 className="text-3xl font-alegreya">
              <span className="text-ephemeri">ephemeri</span>
              <span className="text-day">Day</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
