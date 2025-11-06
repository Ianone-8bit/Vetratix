export default function Navbar() {
  return (
    <nav className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Halo, Admin</span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg">
          Logout
        </button>
      </div>
    </nav>
  );
}
