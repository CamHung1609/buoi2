import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowAllNhom = () => {
  const [listGroup, setListGroup] = useState([]);
  useEffect(() => {
    const getNhom = () => {
      const response = axios
        .get(`${process.env.REACT_APP_API_URL}api/getNhom`)
        .then((res) => {
          setListGroup(res.data.nhom);
        });
    };
    getNhom();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-primary" to="/addNhom">
          Them Nhom
        </Link>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên Nhóm</th>
            <th scope="col">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {listGroup.map((group, ind) => (
            <tr key={ind}>
              <th scope="row">{ind + 1}</th>
              <td>{group.ten}</td>
              <td>
                <Link className="btn btn-success me-3">Sua</Link>
                <Link className="btn btn-danger">Xoa</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllNhom;
