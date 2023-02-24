import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from "react-redux"

export default function AddProduct() {
    const { userInfo } = useSelector(state => state.user)
    const [name, setName] = useState();
    const [brand, setbrand] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [description, setdescription] = useState();
    const [stock, setStock] = useState()
    const [category, setcategory] = useState()
    const [preview, setPreview] = useState();

    /* A function that will be called when the user click on the image input. */
    const handleImage = e => {
        console.log(e.target.files[0]);
        setImage(pre => e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))
    }
    const handleAddProduct = async (e) => {
        e.preventDefault()

        const fd = new FormData()
        fd.append("name", name)
        fd.append("brand", brand)
        fd.append("price", price)
        fd.append("image", image)
        fd.append("description", description)
        fd.append("stock", stock)
        fd.append("category", category)

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: userInfo.token
            }
        }
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/products/addProduct`, fd, config)
        console.log(data);
        e.target.reset();
    }
    return (
        <>
            <div className="container">
                {
                    JSON.stringify(userInfo.token)
                }
                <div className="row">
                    <div className="col-sm-6 offset-sm-3 mt-5">
                        <div className="card">
                            <div className="card-header">Add Product</div>
                            <div className="card-body">
                                <form onSubmit={handleAddProduct}>
                                    <input type="text" placeholder='name' onChange={e => setName(e.target.value)} className="form-control" />
                                    <br />
                                    <input type="text" placeholder='brand' onChange={e => setbrand(e.target.value)} className="form-control" />
                                    <br />
                                    <input type="number" placeholder='price' onChange={e => setPrice(e.target.value)} className="form-control" />
                                    <br />
                                    <div className='d-flex gap-5'>
                                        <input type="file" placeholder='image' onChange={handleImage} className="form-control" />
                                        <div>
                                            <a href={preview} target="_blank">
                                                <img src={preview} alt="" height="35" width="50" /></a>
                                        </div>
                                    </div>
                                    <br />
                                    <textarea type="text" placeholder='description' onChange={e => setdescription(e.target.value)} className="form-control" ></textarea>
                                    <br />
                                    <input type="number" placeholder='stock' onChange={e => setStock(e.target.value)} className="form-control" />
                                    <br />
                                    <input type="text" placeholder='category' onChange={e => setcategory(e.target.value)} className="form-control" />
                                    <br />
                                    <button className="btn btn-success w-100">Add Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
