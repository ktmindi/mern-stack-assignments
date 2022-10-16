import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const List = (props) => {

    const {productList, setProductList} = props;

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allProducts')
        .then((res)=>{
            console.log(res.data)
            setProductList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])


    return(
        <div>
            <h1 className="mb-5">All Products: </h1>
                {productList.map((product, index)=>{
                    return <p key={index}>
                    <Link to ={`/product/${product._id}`}>{product.title}</Link>

                    </p>
                })
            }
        </div>
    )
}

export default List;