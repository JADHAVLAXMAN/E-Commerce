import React from 'react'
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
    return (
        <div className='container'>
            <h1>Hello Dear...</h1>
            <h1>Your Order is Placed SuccessFully</h1>
            <Link className='btn btn-success' to="/profile">Profile</Link>
            &nbsp;&nbsp;&nbsp;
            <Link className='btn btn-outline-success' to="/order-history">Manage Order</Link>
        </div>
    )
}
