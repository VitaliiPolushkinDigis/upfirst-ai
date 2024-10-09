import { useState, useEffect, useCallback } from "react";
import { Post } from "../constants/types";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const removePost = useCallback((id: number) => {
    setPosts((prev) => [...prev.filter((p) => p.id !== id)]);
  }, []);

  const paginate = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${20}&_page=${currentPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message);
          setLoading(false);
        }
      }
    };
    fetchPosts();
  }, [currentPage]);

  return { posts, loading, error, removePost, paginate, currentPage };
}
