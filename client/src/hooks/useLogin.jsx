import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { setLogin } = useAuthContext();

  const login = async (values) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/company/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      sessionStorage.setItem("JWT_TOKEN", JSON.stringify(json.token));
      setLogin(json.company);
    }
  };

  return { login, isLoading, error };
};
