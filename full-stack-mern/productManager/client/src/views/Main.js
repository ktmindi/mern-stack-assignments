import React, { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'


const Main = (props) => {

    const [productList, setProductList] = useState([]);
    
    return(
        <div>
            <Form productList={productList} setProductList={setProductList} />
            <hr/>
            <List productList={productList} setProductList={setProductList} />

        </div>
        
    )
}

export default Main;