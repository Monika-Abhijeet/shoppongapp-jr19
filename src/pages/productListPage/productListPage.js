import React from "react";
import { useSelector } from "react-redux";

function ProductListPage(props) {
  const isLogged = useSelector((state) => state.isLogged);
  if (!isLogged) {
    return <h1 style={{ color: "red" }}>Please Login to view this page</h1>;
  }
  return <div>product list</div>;
}

export default ProductListPage;
