import React, { useEffect, useState } from "react";
// Sử dụng useSearchParams từ React Router để đọc giá trị danh mục từ query string.
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const ShowAllSanPham = () => {
  const [listSanPham, setListSanPham] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const idCategory = searchParams.get("idCategory");
    const getSanPham = async () => {
      try {
        let url = `${process.env.REACT_APP_API_URL}api/getSanPham`;
        if (idCategory) {
          url = `${process.env.REACT_APP_API_URL}api/getSanPham/${idCategory}`;
        }
        const res = await axios.get(url);
        setListSanPham(res.data.sanpham || []);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };
    getSanPham();
  }, [searchParams]);
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
        <Link className="btn btn-primary" to="/addSanPham">
          Them San Pham
        </Link>
      </div>
      <div className="row">
        <div className="flex-shrink-0 p-3 bg-white col-2">
          <Link
            to="/"
            className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
          >
            <span className="fs-5 fw-semibold">Danh Muc</span>
          </Link>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <Link className="btn btn-warning" to={`/showAllSanPham`}>
                Tất cả
              </Link>
            </li>
            {listGroup.map((group, ind) => (
              <li key={ind} className="mb-1">
                <Link
                  className="btn btn-warning"
                  to={`/showAllSanPham?idCategory=${group.idnhom}`}
                >
                  {group.ten}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên San Pham</th>
                <th>Gia</th>
                <th>Hinh Anh</th>
                <th className="col-3">Mo Ta</th>
                <th>ID Nhom</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {listSanPham.map((product, ind) => (
                <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>{product.ten}</td>
                  <td>{product.gia}</td>
                  <td>
                    <img height={100} src={product.hinhanh} alt="" />
                  </td>
                  <td className="truncate-multiline">{product.mota}</td>
                  <td>{product.idnhom}</td>
                  <td>
                    <Link className="btn btn-success me-3">Sua</Link>
                    <Link className="btn btn-danger">Xoa</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowAllSanPham;
