import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [company, setCompany] = useState(
    null || sessionStorage.getItem("company")
  );

  useEffect(() => {
    const storedCompany = JSON.parse(localStorage.getItem("company"));
    if (storedCompany) {
      setCompany(storedCompany);
    }
  }, []);

  const setLogin = (company) => {
    setCompany(company);
    sessionStorage.setItem("company", JSON.stringify(company));
  };

  const setLogout = () => {
    setCompany(null);
    sessionStorage.removeItem("company");
  };

  const values = { company, setLogin, setLogout };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
