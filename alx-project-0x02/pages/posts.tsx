import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import Button from "@/components/common/Button";
import { PostProps } from "../interfaces";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  // Fetch posts from JSONPlaceholder API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const data = await response.json();

        // Map the API response to match our PostProps interface
        const mappedPosts: PostProps[] = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: post.body, // JSONPlaceholder uses 'body' field
          userId: post.userId,
        }));

        setPosts(mappedPosts);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching posts"
        );
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleReadMore = (postId: number) => {
    console.log(`Reading more about post ${postId}`);
    // In a real app, you might navigate to a detailed post page
    // router.push(`/posts/${postId}`);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRefresh = async () => {
    setCurrentPage(1);
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const data = await response.json();

        const mappedPosts: PostProps[] = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));

        setPosts(mappedPosts);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching posts"
        );
      } finally {
        setLoading(false);
      }
    };

    await fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Discover amazing content from ALX Project, with each post crafted
            with care and designed to inform, inspire, and engage.
          </p>

          <div className="flex justify-center gap-2">
            <Button
              size="medium"
              shape="rounded-md"
              onClick={handleRefresh}
              disabled={loading}
            >
              {loading ? "Loading..." : "Refresh Posts"}
            </Button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading posts...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-red-800 font-medium">Error Loading Posts</h3>
            </div>
            <p className="text-red-700 mt-2">{error}</p>
            <Button
              size="small"
              shape="rounded-md"
              onClick={handleRefresh}
              className="mt-3 bg-red-600 hover:bg-red-700"
            >
              Try Again
            </Button>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && currentPosts.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onReadMore={handleReadMore}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  size="small"
                  shape="rounded-md"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : ""
                  }
                >
                  Previous
                </Button>

                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
                    } else {
                      pageNumber = currentPage - 2 + i;
                    }

                    return (
                      <Button
                        key={pageNumber}
                        size="small"
                        shape="rounded-md"
                        onClick={() => handlePageChange(pageNumber)}
                        className={
                          pageNumber === currentPage
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                        }
                      >
                        {pageNumber}
                      </Button>
                    );
                  })}
                </div>

                <Button
                  size="small"
                  shape="rounded-md"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : ""
                  }
                >
                  Next
                </Button>
              </div>
            )}

            {/* Posts Summary */}
            <div className="text-center mt-6 text-gray-600">
              <p>
                Showing {indexOfFirstPost + 1}-
                {Math.min(indexOfLastPost, posts.length)} of {posts.length}{" "}
                posts
              </p>
            </div>
          </>
        )}

        {/* No Posts State */}
        {!loading && !error && posts.length === 0 && (
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 mb-4">
              There are currently no posts to display.
            </p>
            <Button size="medium" shape="rounded-md" onClick={handleRefresh}>
              Refresh Posts
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default PostsPage;
