function Item({ props }) {
  return (
    <>
      <li>
        <a href={props.link}>{props.content}</a>
      </li>
    </>
  );
}

function Menu({ list }) {
  return (
    <>
      <ul>
        {list.map((duongDan, ind) => (
          <Item key={ind} props={duongDan} />
        ))}
      </ul>
    </>
  );
}

function Header() {
  const listAddress = [
    { link: "/", content: "Home" },
    { link: "/login", content: "login" },
    { link: "/car", content: "car" },
    { link: "/hello", content: "hello" },
  ];
  return <Menu list={listAddress} />;
}

export { Header };
