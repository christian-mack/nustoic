import Link from "next/link";
import {
  LayoutDashboard,
  Receipt,
  Users,
  LineChart,
  CreditCard,
  Wallet,
  Settings,
  HelpCircle,
  Award,
  LayoutGrid,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/", active: true },
  { name: "Transactions", icon: Receipt, href: "/transactions" },
  { name: "Accounts", icon: Users, href: "/accounts" },
  { name: "Investments", icon: LineChart, href: "/investments" },
  { name: "Credit Cards", icon: CreditCard, href: "/credit-cards" },
  { name: "Loans", icon: Wallet, href: "/loans" },
  { name: "Services", icon: LayoutGrid, href: "/services" },
  { name: "My Privileges", icon: Award, href: "/privileges" },
  { name: "Setting", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 fixed left-0 top-0 h-full flex flex-col">
      <div className="px-6 py-6">
        <Link href="/" className="flex items-center space-x-2">
          <CreditCard className="h-8 w-8 text-[#4543E8]" />
          <span className="text-xl font-bold">BankDash.</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-6 py-3 text-sm ${
              item.active
                ? "text-[#4543E8] bg-blue-50"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="px-6 py-6 mt-auto">
        <Link
          href="/help"
          className="flex items-center px-4 py-3 text-sm text-gray-500 hover:bg-gray-50 rounded-lg"
        >
          <HelpCircle className="h-5 w-5 mr-3" />
          Help Center
        </Link>
      </div>
    </div>
  );
}
