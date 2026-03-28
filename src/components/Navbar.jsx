import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-red-500 tracking-tight cursor-pointer">
          PixSearch
        </h1>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Bell className="cursor-pointer text-gray-600 hover:text-black transition" />
          <User className="cursor-pointer text-gray-600 hover:text-black transition" />
          
          {/* Profile */}
          <div className="w-9 h-9 bg-gray-300 rounded-full cursor-pointer"></div>
        </div>

      </div>
    </div>
  );
}