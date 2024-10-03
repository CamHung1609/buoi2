function Hello() {
  const person = {
    name: "Peter",
    theme: { backgroundColor: "green", color: "white" },
  };
  return (
    <>
      <div style={person.theme}>
        <h1>Xin Chao:{person.name}</h1>
      </div>
      <div>Chuc ban thanh cong voi React</div>
    </>
  );
}

function HelloPerson({ name }) {
  return (
    <>
      <h1>xin chao ban: {name}</h1>
    </>
  );
}
function Hello2() {
  return (
    <>
      <span>
        <button onClick={hiAll}>Hi All</button>
        <button
          onClick={() => {
            hiYou("Cam Hung");
          }}
        >
          Hi You
        </button>
      </span>
    </>
  );
}
const hiAll = () => {
  alert("hello everyone");
};
const hiYou = (name) => {
  alert("hello" + name);
};

export default Hello;
export { HelloPerson, Hello2 };
