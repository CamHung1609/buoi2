import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Profile() {
  const { dataUser, setDataUser } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!dataUser.username) {
      navigate("/login");
    }
  }, [dataUser, navigate]);
  const handleLogout = () => {
    Cookies.remove("accessToken");
    setDataUser({});
    navigate("/login");
  };
  return (
    <div>
      <h1>HỒ SƠ CỦA : {dataUser.fullname}</h1>
      <h3>TÀI KHOẢN: {dataUser.username}</h3>
      <h3>ĐỊA CHỈ: {dataUser.address}</h3>
      <h3>EMAIL: {dataUser.email}</h3>
    </div>
  );
}

export default Profile;
