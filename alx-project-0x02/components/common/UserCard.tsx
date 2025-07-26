import React from "react";
import { UserProps } from "../../interfaces";
import Button from "./Button";

interface UserCardProps {
  user: UserProps;
  onViewProfile?: (userId: number) => void;
  onSendMessage?: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  onViewProfile,
  onSendMessage,
}) => {
  const { id, name, username, email, address, phone, website, company } = user;

  // Generate user avatar with initials
  const getUserAvatar = (name: string) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
    return initials;
  };

  // Generate avatar color based on user ID
  const getAvatarColor = (userId: number) => {
    const colors = [
      "bg-gradient-to-br from-blue-400 to-blue-600",
      "bg-gradient-to-br from-green-400 to-green-600",
      "bg-gradient-to-br from-purple-400 to-purple-600",
      "bg-gradient-to-br from-pink-400 to-pink-600",
      "bg-gradient-to-br from-yellow-400 to-yellow-600",
      "bg-gradient-to-br from-indigo-400 to-indigo-600",
      "bg-gradient-to-br from-red-400 to-red-600",
      "bg-gradient-to-br from-teal-400 to-teal-600",
    ];
    return colors[userId % colors.length];
  };

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(id);
    }
  };

  const handleSendMessage = () => {
    if (onSendMessage) {
      onSendMessage(id);
    }
  };

  const formatWebsite = (website: string) => {
    if (website.startsWith("http://") || website.startsWith("https://")) {
      return website;
    }
    return `https://${website}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Card Header with Avatar */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-center">
        <div
          className={`w-20 h-20 ${getAvatarColor(
            id
          )} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
        >
          <span className="text-white font-bold text-xl">
            {getUserAvatar(name)}
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">{name}</h2>
        <p className="text-blue-600 font-medium">@{username}</p>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Contact Information */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 mr-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">{email}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 mr-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-sm">{phone}</span>
          </div>

          <div className="flex items-start text-gray-600">
            <svg
              className="w-4 h-4 mr-3 mt-0.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="text-sm">
              <div>
                {address.street}, {address.suite}
              </div>
              <div>
                {address.city}, {address.zipcode}
              </div>
            </div>
          </div>

          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 mr-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
              />
            </svg>
            <a
              href={formatWebsite(website)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              {website}
            </a>
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            {company.name}
          </h3>
          <p className="text-sm text-gray-600 mb-1 font-medium italic">
            &quot;{company.catchPhrase}&quot;
          </p>
          <p className="text-xs text-gray-500">{company.bs}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            size="small"
            shape="rounded-md"
            onClick={handleViewProfile}
            className="flex-1"
          >
            View Profile
          </Button>
          <Button
            size="small"
            shape="rounded-md"
            onClick={handleSendMessage}
            className="flex-1 bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
          >
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
