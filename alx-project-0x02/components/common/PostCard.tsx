import React from "react";
import { PostProps } from "../../interfaces";
import Button from "./Button";

interface PostCardProps {
  post: PostProps;
  onReadMore?: (postId: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onReadMore }) => {
  const { id, title, content, userId } = post;

  // Truncate content for preview
  const truncateContent = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  // Generate user initials or avatar
  const getUserAvatar = (userId: number) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-red-500",
      "bg-gray-500",
    ];
    const colorIndex = userId % colors.length;
    return colors[colorIndex];
  };

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(id);
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* Post Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 ${getUserAvatar(
                userId
              )} rounded-full flex items-center justify-center mr-3`}
            >
              <span className="text-white font-medium text-sm">U{userId}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">User {userId}</p>
              <p className="text-xs text-gray-500">Post #{id}</p>
            </div>
          </div>
        </div>

        {/* Post Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 capitalize">
          {title}
        </h2>

        {/* Post Content Preview */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {truncateContent(content)}
        </p>

        {/* Post Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-sm">Like</span>
            </button>

            <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-sm">Comment</span>
            </button>
          </div>

          <Button size="small" shape="rounded-md" onClick={handleReadMore}>
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
