"use client";

import { useState } from "react";
import { Home, Ticket, Users, Settings } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", icon: Home },
    { name: "Tiket", icon: Ticket },
    { name: "Pengguna", icon: Users },
    { name: "Pengaturan", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Vertratix</h2>
      <ul className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;
          return (
            <li key={item.name}>
              <button
                onClick={() => setActive(item.name)}
                className={`flex items-center w-full px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
