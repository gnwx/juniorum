import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const storedCompany = JSON.parse(localStorage.getItem("company"));
    if (storedCompany) {
      setCompany(storedCompany);
    }
  }, []);

  const login = (company) => {
    setCompany(company);
    localStorage.setItem("company", JSON.stringify(company));
  };

  const logout = () => {
    setCompany(null);
    localStorage.removeItem("company");
  };

  const values = { company, login, logout };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
