import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductAction } from "../actions/product-action";
import ProductCard from "./../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const { reduxProduct, isLoading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);
  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <div className="spinner spinner-border"></div>
        ) : (
          reduxProduct.map((item) => (
            <div className="col-lg-4" key={item._id}>
              {" "}
              <ProductCard single={item} />{" "}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
