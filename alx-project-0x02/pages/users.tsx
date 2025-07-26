// pages/users.tsx

import React from "react";
import { GetStaticProps } from "next";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import Button from "../components/common/Button";
import { UserProps } from "../interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const handleViewProfile = (userId: number) => {
    console.log(`Viewing profile for user ${userId}`);
    // In a real app, you might navigate to a detailed user profile page
    // router.push(`/users/${userId}`);
  };

  const handleSendMessage = (userId: number) => {
    console.log(`Sending message to user ${userId}`);
    // In a real app, you might open a messaging modal or navigate to chat
  };

  const handleRefresh = () => {
    // In a real app, you might trigger a revalidation or redirect
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Users Page</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Meet the amazing people who make up our community. Connect with
            users, view their profiles, and discover the diverse talents and
            backgrounds that drive our platform forward.
          </p>
          <div className="flex justify-center gap-4">
            <p className="text-sm text-gray-500 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {users.length} active members
            </p>
            <span className="text-gray-300">•</span>
            <p className="text-sm text-gray-500">Generated in real-time</p>
          </div>
        </div>

        {/* Users Grid */}
        {users.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {users.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onViewProfile={handleViewProfile}
                  onSendMessage={handleSendMessage}
                />
              ))}
            </div>

            {/* Statistics Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Community Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {users.length}
                  </div>
                  <div className="text-sm text-gray-600">Total Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {new Set(users.map((user) => user.company.name)).size}
                  </div>
                  <div className="text-sm text-gray-600">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {new Set(users.map((user) => user.address.city)).size}
                  </div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {users.filter((user) => user.website).length}
                  </div>
                  <div className="text-sm text-gray-600">With Websites</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* No Users State */
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No users found
            </h3>
            <p className="text-gray-600 mb-4">
              There are currently no users to display.
            </p>
            <Button size="medium" shape="rounded-md" onClick={handleRefresh}>
              Refresh Users
            </Button>
          </div>
        )}

        {/* Static Generation Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-blue-600 mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-blue-800 font-medium mb-1">
                Static Site Generation
              </h3>
              <p className="text-blue-700 text-sm">
                User data was fetched from JSONPlaceholder API at build time
                using{" "}
                <code className="bg-blue-100 px-1 rounded">getStaticProps</code>
                . This ensures fast loading times and excellent SEO performance.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Static Site Generation - fetches user data at build time
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    console.log("Fetching users at build time...");

    // Fetch users from JSONPlaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }

    const users: UserProps[] = await response.json();

    console.log(`Successfully fetched ${users.length} users at build time`);

    return {
      props: {
        users,
      },
      // Revalidate every 2 hours (7200 seconds) - ISR (Incremental Static Regeneration)
      revalidate: 7200,
    };
  } catch (error) {
    console.error("Error fetching users during build:", error);

    // Return empty users array if fetch fails
    return {
      props: {
        users: [],
      },
      // Try to revalidate more frequently if there was an error
      revalidate: 300, // 5 minutes
    };
  }
};

export default Users;
