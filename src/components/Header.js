import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Item({ props }) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={props.link}>
          {props.content}
        </Link>
      </li>
    </>
  );
}

function Menu({ list }) {
  const { dataUser, setDataUser } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.post(`${process.env.REACT_APP_API_URL}api/logout`).then(() => {
      Cookies.remove("accessToken");
      setDataUser({});
      navigate("/login");
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {list.map((duongDan, ind) => (
                <Item key={ind} props={duongDan} />
              ))}
              <button onClick={handleLogout}>dang xuat</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function Header() {
  const { dataUser } = useContext(AppContext);
  const listAddress = [
    { link: "/", content: "Home" },
    { link: "/login", content: "login" },
    { link: "/car", content: "car" },
    { link: "/hello", content: "hello" },
    { link: "/showAllNhom", content: "Quản Lý Nhóm" },
    { link: "/showAllSanPham", content: "Quản Lý Sản Phẩm" },
    { link: "/profile", content: `${dataUser.username ?? "CHƯA ĐĂNG NHẬP"}` },
  ];
  return <Menu list={listAddress} />;
}

export { Header };
