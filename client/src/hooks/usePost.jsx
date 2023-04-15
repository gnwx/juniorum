import { useState } from "react";

export const usePost = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const token = "" || JSON.parse(sessionStorage.getItem("JWT_TOKEN"));

  const post = async (values) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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

  const edit = async (id, values) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://localhost:4000/api/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      console.log("post edited");
      console.log(json);
    }
  };
  const deletePost = async (id) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://localhost:4000/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      console.log("post deleted");
      console.log(json);
    }
  };

  return { post, edit, deletePost, isLoading, error };
};
