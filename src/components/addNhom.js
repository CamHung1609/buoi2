import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddNhom = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const inpChange = (e) => {
    setName(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const addGroup = async () => {
      setName(name.trim());
      await axios.post(`${process.env.REACT_APP_API_URL}api/addNhom`, {
        name: name,
      });
      navigate("/showAllNhom");
    };
    if (!name) {
      alert("Nhập tên nhóm mới trước khi thêm");
    }
    addGroup();
  };
  return (
    <div>
      <h1 className="my-5">Thêm Nhóm</h1>
      <div>
        <form onSubmit={formSubmit}>
          <div className="row d-flex justify-content-center">
            <label htmlFor="" className="form-label col-2 h3 my-2">
              Tên Nhóm
            </label>
            <div className="col-4">
              <input
                type="text"
                className="form-control my-2"
                placeholder="Nhập Tên Nhóm"
                onChange={inpChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success my-2">
            Thêm
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNhom;
