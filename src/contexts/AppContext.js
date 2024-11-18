import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AppContext = createContext({});
const AppProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      return;
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}api/getInfoUserJWT`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setDataUser(res.data.user);
      });
  }, []);
  return (
    <AppContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
