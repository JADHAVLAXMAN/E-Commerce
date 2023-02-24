import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addToCartAction, removeFromCartAction } from './../actions/cart-actions';
import { Link } from 'react-router-dom';

const Cart = ({ location, match }) => {
    const dispatch = useDispatch()
    const { cartItem } = useSelector(state => state.cart)

    useEffect(() => {                  /*                               ID*/             /*Quantity*/
        location.search.split("=")[1] && dispatch(addToCartAction(match.params.id, location.search.split("=")[1]))
    }, []);


    return (
        <div className='container'>
            {
                cartItem.length > 0
                    ?
                    <div className="row">
                        {
                            cartItem.map(item => (
                                <div key={item._id} className="col-lg-8">
                                    <img src={`${process.env.REACT_APP_URL}/${item.image}`} alt="" />
                                    <h2>{item.name}</h2>
                                    <p>Qty: <strong>{item.qty}</strong></p>
                                    <p>Price: <strong>{item.price}</strong></p>
                                    <button className="btn btn-danger" onClick={e => dispatch(removeFromCartAction(item._id))}>Remove</button>
                                </div>
                            ))
                        }
                        <div className="col-sm-4">
                            <h1>Deleverable Qty : {
                                cartItem.reduce((acc, item) => acc + (+item.qty), 0)
                            }
                            </h1>
                            <h1>Total Payble Amount : {
                                cartItem.reduce((acc, item) => acc + (item.qty * item.price), 0)
                            }
                            </h1>
                            <Link className="btn btn-outline-success w-100" to="/checkout">Checkout</Link>
                        </div>
                    </div>
                    : <h1>Item Not Available</h1>
            }
        </div>
    );
}

export default Cart;
