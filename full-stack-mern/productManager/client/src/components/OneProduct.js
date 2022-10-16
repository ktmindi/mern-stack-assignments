import React, { useState,useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'


const OneProduct = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) =>{
            setOneProduct(res.data);
        }).catch((err) => {
            console.log(err)
        })
    },[id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                navigate("/")
            }).catch((err)=> {
                console.log(err)
            })
    }

    return (
        <div>
            <h2>{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <Link to={`/product/edit/${oneProduct._id}`}>Edit Product</Link>
            <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
        </div>
    )
}


export default OneProduct;