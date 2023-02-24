import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { userProfileAction } from '../actions/user-action';

export default function Profile({ history }) {
    const { userInfo } = useSelector(state => state.user)
    const { profile } = useSelector(state => state.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        userInfo ? dispatch(userProfileAction()) : history.push("/")
    }, []);
    return (
        <div className='container' >
            <div className="row">
                <div className="mt-5 col-sm-6 offset-sm-3">
                    {/* <div className="card" style={profile?.isAdmin ? { border: "2px solid red" } : { border: "2px solid blue" }}> */}
                    <div className={profile?.isAdmin ? "card border-success border-3" : "card border-warning border-3"}>
                        <div className="card-header">
                            Profile
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Name:</strong> <span>{profile?.name}</span>
                                </li>
                                <li className="list-group-item">
                                    <strong>Email:</strong> <span>{profile?.email}</span>
                                </li>
                                <li className="list-group-item">
                                    <strong>Address</strong>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <strong>House No:</strong> <span>{profile?.address[0].houseNo}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Street:</strong> <span>{profile?.address[0].street}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Pincode:</strong> <span>{profile?.address[0].pincode}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>City:</strong> <span>{profile?.address[0].city}</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}