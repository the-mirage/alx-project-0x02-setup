import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { Post } from "@/interfaces";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  // Default static posts
  const defaultPosts = [
    {
      id: "default-1",
      title: "Mobile App Development",
      content:
        "Create powerful mobile applications for iOS and Android applications. Our stack are React Native and Swift for cross-platform development.",
    },
    {
      id: "default-2",
      title: "Web App Development",
      content:
        "Build modern, responsive websites using the latest technologies and best practices. Our development approach focuses on performance, accessibility, and user experience.",
    },
    {
      id: "default-3",
      title: "Cloud Solutions",
      content:
        "Deploy and scale your applications with cloud infrastructure. We provide expertise in AWS, Azure, and Google Cloud Platform services.",
    },
    {
      id: "default-4",
      title: "UI/UX Design",
      content:
        "Transform your data into actionable insights with advanced analytics and machine learning. We help businesses make data-driven decisions.",
    },
    {
      id: "default-5",
      title: "Digital Marketing",
      content:
        "Grow your online presence with strategic digital marketing campaigns. Our services include SEO, social media marketing, and content strategy.",
    },
  ];

  // Handle adding new post
  const handleAddPost = (postData: Omit<Post, "id" | "createdAt">) => {
    const newPost: Post = {
      id: `user-${Date.now()}`,
      ...postData,
      createdAt: new Date(),
    };
    setUserPosts((prev) => [newPost, ...prev]);
  };

  return (
    <>
      <Header />

      <main className="p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome to the ALX Project</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Post
          </button>
        </div>

        {/* User Posts Section */}
        {userPosts.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Your Posts
              </h2>
              <span className="ml-2 bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
                {userPosts.length}
              </span>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mb-6">
              {userPosts.map((post) => (
                <div key={post.id} className="relative">
                  <Card title={post.title} content={post.content} />
                  <div className="absolute top-2 right-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      New
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Default Posts Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {defaultPosts.map((post) => (
            <Card key={post.id} title={post.title} content={post.content} />
          ))}
        </div>

        {/* Post Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
};

export default Home;
