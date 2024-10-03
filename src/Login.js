import { useState } from "react";
function Login() {
  let [userName, setUserName] = useState("");
  let [pass, setPass] = useState("");
  let [isAdmin, setIsAdmin] = useState(false);

  const ConsoleLog = () => {
    console.log("UserName: " + userName);
    console.log("Pass: " + pass);
    console.log("IsAdmin: " + isAdmin);
  };
  return (
    <>
      <form action="" method="">
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            onInput={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="pass"
            onInput={(e) => {
              setPass(e.target.value);
            }}
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
            onClick={(e) => {
              e.preventDefault();
              ConsoleLog();
            }}
          >
            Dang Nhap
          </button>
        </div>
      </form>
    </>
  );
}
export default Login;
