import { useState } from "react";

export const usePost = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const post = async (values) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      console.log("Post created!");
      console.log(json);
    }
  };

  return { post, isLoading, error };
};
