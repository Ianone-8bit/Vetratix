"use client";
import React, { useState } from "react";
import Input from "@/app/components/Ui/input";
import Button from "@/app/components/Ui/button";


export default function LoginPage() {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login dengan NIM: ${nim}, Password: ${password}`);
    // TODO: sambungkan ke backend login API nanti
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Login Mahasiswa</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="NIM"
            placeholder="Masukkan NIM anda"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" label="Masuk" />
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Daftar di sini
          </a>
        </p>
      </div>
    </div>
  );
}
