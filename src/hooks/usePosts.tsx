import { useState, useEffect, useCallback } from "react";
import { Post } from "../utils/constants/types";

export function usePosts(page: number = 1, limit: number = 10) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const removePost = useCallback((id: number) => {
    setPosts((prev) => [...posts.filter((p) => p.id !== id)]);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
          { signal }
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

    return () => {
      controller.abort();
    };
  }, [page, limit]);

  return { posts, loading, error, removePost };
}
