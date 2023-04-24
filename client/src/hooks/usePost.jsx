import { useState } from "react";

export const usePost = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const token = "" || JSON.parse(sessionStorage.getItem("JWT_TOKEN"));
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const post = async (values) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${baseUrl}/api/posts`, {
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
      return false;
    }
    if (response.ok) {
      setIsLoading(false);
      return true;
    }
  };

  const edit = async (id, values) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${baseUrl}/api/posts/${id}`, {
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
      return false;
    }
    if (response.ok) {
      setIsLoading(false);
      return true;
    }
  };
  const deletePost = async (id) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${baseUrl}/api/posts/${id}`, {
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
      return false;
    }
    if (response.ok) {
      setIsLoading(false);
      return true;
    }
  };

  return { post, edit, deletePost, isLoading, error };
};
