import React from "react";
import Card from "../components/common/Card";

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-600 mb-8">Home Page</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="Next.js Basics"
        content="Learn the basics of Next.js and build amazing web apps."
      />
      <Card
        title="TypeScript Integration"
        content="Explore how to use TypeScript with Next.js for type safety."
      />
      <Card
        title="Tailwind CSS Styling"
        content="Style your components effortlessly with Tailwind CSS."
      />
    </div>
  </div>
);

export default HomePage;
