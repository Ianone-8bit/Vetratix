export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-10 py-4 bg-[#1E9E74] text-white shadow">
        <h1 className="text-3xl font-bold">
          <span className="text-yellow-300">V</span>etra<span className="text-green-300">T</span>ix
        </h1>

        <div className="space-x-3">
          <a href="/login" className="px-4 py-2 bg-white text-black rounded">
            Sign In
          </a>
          <a href="/register" className="px-4 py-2 bg-white text-black rounded">
            Sign Up
          </a>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-center mt-4 text-grey">
        <input
          type="text"
          placeholder="Search Event"
          className="w-1/2 p-2 border rounded"
        />
      </div>

      {/* Highlight Event */}
      <div className="grid grid-cols-2 gap-4 mt-10 px-20">
        <div className="bg-yellow-400 h-40 rounded shadow" />
        <div className="bg-yellow-400 h-40 rounded shadow" />
      </div>

      {/* Events */}
      <h2 className="text-center text-xl font-semibold mt-10">EVENTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-20 mt-4">
        <div className="bg-yellow-400 h-60 rounded shadow" />
        <div className="bg-yellow-400 h-60 rounded shadow" />
        <div className="bg-yellow-400 h-60 rounded shadow" />
      </div>
    </div>
  );
}
