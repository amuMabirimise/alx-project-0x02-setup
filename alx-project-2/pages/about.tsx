import React from "react";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

const AboutPage = () => (
  <div>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">About Page</h1>
      <p className="mt-4 text-lg text-gray-700">
        Learn more about this project and its purpose.
      </p>
      <div className="mt-6 space-y-4">
        <Button size="small" shape="rounded-sm">
          Small Rounded Button
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Rounded Button
        </Button>
        <Button size="large" shape="rounded-full">
          Large Rounded Button
        </Button>
      </div>
    </main>
  </div>
);

export default AboutPage;
