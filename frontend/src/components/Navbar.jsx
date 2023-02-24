import React from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"



export default function Navbar() {
    const dispatch = useDispatch()
    const { cartItem } = useSelector(state => state.cart)
    const { userInfo } = useSelector(state => state.user)

    return <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/"><strong>Skill Shop</strong></Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <button className="btn btn-light btn-sm">Cart
                                    <div className="badge text-dark">
                                        {
                                            cartItem.reduce((acc, item) => acc + (+item.qty), 0)
                                        }
                                    </div>
                                </button>
                            </Link>
                        </li>
                        <li>
                            {
                                userInfo ?
                                    <div className="dropdown">
                                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {userInfo.info.name}
                                        </button>
                                        <ul className="dropdown-menu me-5">
                                            <li><Link className='dropdown-item' to="/profile">My Profile</Link></li>
                                            {
                                                userInfo.info.isAdmin ? (
                                                    <div>
                                                        <li><Link className="dropdown-item" to="./dashboard">Dashboard</Link></li>
                                                        <li><Link className="dropdown-item" to="/add-product">Add Product</Link></li>
                                                    </div>
                                                ) : ""
                                            }

                                            <li><Link className="dropdown-item" to="/">Super Coin Zone</Link></li>
                                            <li><Link className="dropdown-item" to="/order-history">Order History</Link></li>
                                            <li><Link className="dropdown-item" to="/">SkillShop Plus Zone</Link></li>
                                            <li><Link className="dropdown-item" to="./logout">Logout</Link></li>
                                        </ul>
                                    </div>
                                    : <div>
                                        <Link className="nav-link active" to="./login">
                                            Login
                                        </Link>
                                    </div>
                            }

                        </li>
                        <li>
                            <Link className="nav-link active" to="./register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>;
}
