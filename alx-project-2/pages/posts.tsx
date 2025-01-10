import React from "react";
import Header from "../components/layout/Header";

const PostsPage: React.FC = () => (
  <div>
    <Header />
    <main className="p-4">
      <h1 className="text-4xl font-bold text-blue-600">Posts Page</h1>
      <p className="mt-4 text-lg text-gray-700">Read our latest posts here.</p>
    </main>
  </div>
);

export default PostsPage;
