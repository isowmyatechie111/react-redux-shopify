import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts, setProducts } from "../redux/actions/productAction";
import Row from "react-bootstrap/Row";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Row style={{ marginTop: "40px" }}>
      <ProductComponent />
    </Row>
  );
};

export default ProductListing;
//style={{ marginTop: "40px" }}
