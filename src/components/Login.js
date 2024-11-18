import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import { AppContext } from "../contexts/AppContext";

function Login() {
  let [username, setUserName] = useState("");
  let [password, setPass] = useState("");
  let [isAdmin, setIsAdmin] = useState(false);
  const { dataUser, setDataUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}api/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        setDataUser(response.data.user);
        Cookies.set("accessToken", response.data.accessToken, { expires: 1 });
        navigate("/profile");
      });
  };

  return (
    <>
      <form action="" method="">
        <div className="row mb-3">
          <label className="form-label col-2">Username</label>
          <input
            className="form-control col"
            name="username"
            type="text"
            placeholder="Username"
            onInput={(e) => {
              setUserName(e.target.value);
            }}
            value={username}
          />
        </div>
        <div className="row">
          <label className="form-label col-2">Password</label>
          <input
            className="form-control col"
            name="password"
            type="password"
            placeholder="pass"
            onInput={(e) => {
              setPass(e.target.value);
            }}
            value={password}
          />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => {
              setIsAdmin(!isAdmin);
            }}
          />
          <label>Is Amin ???</label>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={handleLogin}
          >
            ĐĂNG NHẬP
          </button>
        </div>
      </form>
    </>
  );
}
export default Login;
