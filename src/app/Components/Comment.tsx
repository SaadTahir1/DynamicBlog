"use client";

import { useState, useEffect } from "react";

const Comment = () => {
  const [comment, setComment] = useState<string>(""); // For new comment input
  const [comments, setComments] = useState<string[]>([]); // For storing all comments

  // Load comments from localStorage on the first render
  useEffect(() => {
    try {
      const storedComments = localStorage.getItem("comments");
      if (storedComments) {
        const parsedComments = JSON.parse(storedComments);
        if (Array.isArray(parsedComments)) {
          setComments(parsedComments); // Load comments from localStorage if valid
        }
      }
    } catch (error) {
      console.error("Failed to load comments from localStorage:", error);
    }
  }, []); // Run only once when the component mounts

  // Save comments to localStorage whenever the `comments` array changes
  useEffect(() => {
    try {
      localStorage.setItem("comments", JSON.stringify(comments));
    } catch (error) {
      console.error("Failed to save comments to localStorage:", error);
    }
  }, [comments]); // Dependency ensures it runs whenever `comments` changes

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments((prevComments) => [comment, ...prevComments]); // Add new comment
      setComment(""); // Clear input
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* Comment Input Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={(e: any) => setComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Give your thoughts..."
        />
        <button
          type="submit"
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>

      {/* Display Comments */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Comments:</h3>
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
