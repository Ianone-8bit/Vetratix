"use client";
import React, { useState } from "react";
import Input from "@/app/components/Ui/input";
import Button from "@/app/components/Ui/button";

export default function RegisterPage() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Daftar dengan nama: ${nama}, NIM: ${nim}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Daftar Mahasiswa
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            label="Nama Lengkap"
            placeholder="Masukkan nama anda"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
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
          <Button type="submit" label="Daftar" />
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Masuk di sini
          </a>
        </p>
      </div>
    </div>
  );
}
