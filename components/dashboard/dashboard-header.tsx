import { Search, Bell, Settings } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-semibold">Overview</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for something"
              className="pl-10 pr-4 py-2 rounded-lg bg-[#F7F9FB] border-none text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <Image
            src="https://place-hold.it/300x500"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
