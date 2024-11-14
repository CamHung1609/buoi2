import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowAllNhom = () => {
  const [listGroup, setListGroup] = useState([]);
  useEffect(() => {
    const getListGroup = () => {
      const response = axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/getListGroup`)
        .then((res) => {
          setListGroup(res.data.groups);
        });
    };
    getListGroup();
  }, []);
  return <div>show all nhom</div>;
};

export default ShowAllNhom;
