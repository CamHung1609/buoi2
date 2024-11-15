import { Link } from "react-router-dom";

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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function Header() {
  const listAddress = [
    { link: "/", content: "Home" },
    { link: "/login", content: "login" },
    { link: "/car", content: "car" },
    { link: "/hello", content: "hello" },
    { link: "/showAllNhom", content: "Quản Lý Nhóm" },
    { link: "/showAllSanPham", content: "Quản Lý Sản Phẩm" },
  ];
  return <Menu list={listAddress} />;
}

export { Header };
