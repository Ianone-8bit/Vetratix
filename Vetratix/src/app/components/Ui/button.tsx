"use client";
import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
};

export default function Button({ label, onClick, type = "button", variant = "primary" }: ButtonProps) {
  const baseStyle = "w-full py-2 rounded-lg font-semibold transition";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-gray-800";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle}`}
    >
      {label}
    </button>
  );
}
