import React, {useState,useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()


    const [headerTitle, setHeaderTitle] = useState("")

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setHeaderTitle(res.data.title);
        })
        .catch((err) => console.log(err));
}, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/update/${id}`, {
            title,
            price,
            description
        }).then((res)=> {
            console.log(res)
            console.log(res.data)
            navigate("/");
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1 className="mb-5">Edit {headerTitle}</h1>
            <form onSubmit={submitHandler}>
                <label className="form-label">Title</label>
                <input type="text" name="title" className="form-control"value={title} onChange={(e)=> setTitle(e.target.value)} />

                <label className="form-label">Price</label>
                <input type="number" name="price" className="form-control"value={price} onChange={(e)=> setPrice(e.target.value)} />
                <label className="form-label">Description</label>
                <input type="text" name="description" className="form-control"value={description} onChange={(e)=> setDescription(e.target.value)} />
                <button type="submit" className="btn btn-info mt-3">Update</button>
            </form>
        </div>
    )
}

export default Update