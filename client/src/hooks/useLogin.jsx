import { useState } from "react";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const login = async (values) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/company/login/", {
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
    }
  };

  return { login, isLoading, error };
};
