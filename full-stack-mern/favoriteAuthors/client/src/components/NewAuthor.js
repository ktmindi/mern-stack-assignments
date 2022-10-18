import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewAuthor = () => {

    const [name,setName] = useState('')
    const [errors,setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/author',{
            name
        }).then((res)=>{
            console.log("From catch on back", res)
            navigate('/')
        }).catch((err)=>{
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div className="container">
            <div className="span-6 mx-auto">
                <form onSubmit={submitHandler}>
                <label className="form-label">Name:</label>
                <input type ="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                { errors.name ? <span className="text-danger">{errors.name.message}</span> : null} <br></br> 
                <button type="submit" className="btn btn-info mt-3">Add Author</button>
                
                </form>
            </div>
        </div>
    )

}

export default NewAuthor