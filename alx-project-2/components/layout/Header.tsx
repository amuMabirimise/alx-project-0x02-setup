import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
    <h1 className="text-2xl font-bold">ALX Project</h1>
    <nav className="flex gap-4">
      <Link href="/home">
        <a className="hover:underline">Home</a>
      </Link>
      <Link href="/about">
        <a className="hover:underline">About</a>
      </Link>
    </nav>
  </header>
);

export default Header;
