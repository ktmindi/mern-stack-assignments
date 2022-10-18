import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EditAuthor = () => {
    
    
    
    
    const [name,setName] = useState('')
    const [errors,setErrors] = useState({})

    const navigate = useNavigate()
    const{id} = useParams()
    const [notFoundError, setNotFoundError] = useState('')
    console.log(id)



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res)=>{
            console.log(res.data)
            setName(res.data.name)
        }).catch((err)=>{
            console.log(err.res)
            setNotFoundError('Author not found')
        })
    },[])


    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`,{
            name
        }).then((res)=>{
            console.log("From catch on back", res)
            navigate('/')
        }).catch((err)=>{
            console.log(err.response.data.err.errors)
            setErrors(err.response.data.err.errors)
        })
    }

    return(
        <div className="container">
            <div className="span-6 mx-auto">
                <form onSubmit={submitHandler}>
                {notFoundError ? (<h2>{notFoundError} <Link to="/new">Click here to add author</Link></h2>) : null}

                <label className="form-label">Name:</label>
                <input type ="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                { errors.name ? <span className="text-danger">{errors.name.message}</span> : null} <br></br> 
                
                <button className="btn btn-info m-2"><Link to={'/'}>Cancel</Link></button>
                <button type="submit" className="btn btn-info m-2">Submit</button>
                
                </form>
            </div>
        </div>
    )

}

export default EditAuthor