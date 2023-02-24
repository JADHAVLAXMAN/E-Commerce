import React from "react";
import { Link } from 'react-router-dom';

export default function ProductCard({ single }) {
    return (
        <Link to={`/product/${single._id}`} className="text-decoration-none">
            <br /><br /><br />
            <img src={`${process.env.REACT_APP_URL}/${single.image}`} alt="" className="img-fluid" />
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Name: </strong>
                    <strong>{single.name}</strong>
                </li>
                <li className="list-group-item">
                    <strong>Brand: </strong>
                    {single.brand}
                </li>
                {/* <li className="list-group-item">
                    <strong>Description: </strong>
                    {single.description}
                </li> */}
                <li className="list-group-item">
                    <strong>Price: </strong>
                    {single.price}
                </li>
                <li className="list-group-item">
                    <strong>Stock: </strong>
                    {single.stock}
                </li>
            </ul>
        </Link>
    );
}
