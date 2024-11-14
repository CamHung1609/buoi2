import { useState } from "react";
function Car() {
  const [car, setCar] = useState({
    name: "toyota",
    color: "black",
    year: "2018",
  });
  const [data, setData] = useState("");
  const update = () => {
    setCar({
      ...car,
      year: data,
    });
  };
  return (
    <div>
      Show information of car: {car.name},{car.color},{car.year}
      <div></div>
      Update year of car:{" "}
      <input
        type="number"
        value={data}
        onInput={(e) => {
          setData(e.target.value);
        }}
      />
      <input type="button" value="Update year" onClick={update} />
    </div>
  );
}
export default Car;
