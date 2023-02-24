import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { placeOrderAction } from './../actions/order-actions';
import { userProfileAction } from '../actions/user-action';
import { emptyCartAction } from './../actions/cart-actions';

export default function Summary() {
    const { profile } = useSelector(state => state.profile)
    const { cartItem } = useSelector(state => state.cart)

    const dispatch = useDispatch()
    // dispatch(placeOrderAction({
    //     userId: profile.id,
    //     products: [],
    // }))

    const placeOrder = async () => {
        const formData = cartItem.map((item) => {
            return { productId: item._id, qty: item.qty }
        })

        console.log({ products: [...formData], userId: profile.id });

        const { data } = await axios.post("http://localhost:5000/api/orders", {
            products: [...formData],
            userId: profile.id
        })
        console.warn(data)
        dispatch(emptyCartAction())
    }
    useEffect(() => {
        if (!profile) {
            console.log("No Profile");
            dispatch(userProfileAction())
        }
    }, []);
    return (
        <div>
            {/* {
                JSON.stringify(profile)
            } */}
            <br />
            {/* {
                JSON.stringify(profile.address)
            } */}
            <br />
            {/* {
                JSON.stringify(cartItem)
            } */}


            {
                profile && <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <div className="card">
                                <div className="card-header">User Info</div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">{profile.name}</li>
                                        <li className="list-group-item">{profile.email}</li>
                                    </ul>
                                </div>
                            </div><br />
                            <div className="card">
                                <div className="card-header alert-success">Cart Info</div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        {
                                            cartItem.map((item, i) => <li key={i} className='list-group-item d-flex justify-content-between'>
                                                {item.name}
                                                <div>
                                                    <span>
                                                        {item.price}*{item.qty} = {item.price * item.qty}
                                                    </span>

                                                </div>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <h5>
                                        Total Payble Amount is: {
                                            cartItem.reduce((acc, item) => acc + (item.qty * item.price), 0)
                                        }
                                    </h5>
                                </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="card-header alert-success">Address Info</div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">{"Houser No: " + profile.address[0].houseNo}</li>
                                        <li className="list-group-item">{"Street: " + profile.address[0].street}</li>
                                        <li className="list-group-item">{"City: " + profile.address[0].city}</li>
                                        <li className="list-group-item">{"Pincode: " + profile.address[0].pincode}</li>
                                    </ul>
                                </div>
                            </div><br /><br />
                            <Link to="/order-success" className="btn btn-success" onClick={placeOrder}>Place Order</Link>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}
