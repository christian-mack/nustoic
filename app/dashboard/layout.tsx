import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/dashboard-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-8 pt-24">{children}</main>
      </div>
    </div>
  );
}
