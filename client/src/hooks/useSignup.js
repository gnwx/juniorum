import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (values) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/company/signup", {
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
      console.log("Company Created");
      console.log(json);
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
