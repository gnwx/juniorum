import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const { setLogin } = useAuthContext();

  const login = async (values) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}/api/company/login/`, {
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
        return false;
      }

      setIsLoading(false);
      sessionStorage.setItem("JWT_TOKEN", JSON.stringify(json.token));
      setLogin(json.company);
      return true;
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      return false;
    }
  };

  return { login, isLoading, error };
};
