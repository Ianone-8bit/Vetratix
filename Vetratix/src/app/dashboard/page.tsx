import Navbar from "@/app/components/Navbar/navbar";
import Sidebar from "@/app/components/Ui/sidebar";
import Card from "@/app/components/Ui/card";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Total Tiket" value="128" />
          <Card title="Event Aktif" value="5" />
          <Card title="Pengguna" value="320" />
        </main>
      </div>
    </div>
  );
}
