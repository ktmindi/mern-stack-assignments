import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link, } from "react-router-dom";



const AllAuthors = () => {
    const [all, setAll] = useState([]);
    
    
    
    
    useEffect(() => {
    axios.get("http://localhost:8000/api/author")
    .then((res) => {
        console.log(res.data)
        setAll(res.data)
    }).catch((err) => {
        console.log(err.res)
    })
    }, [])

    const deleteHandler = (deleteid) => {
    axios.delete(`http://localhost:8000/api/author/${deleteid}`)
    .then((res) => {
        console.log("Author Deleted")
        console.log(res)
        const filteredAuthors = all.filter((author) => {
            return author._id !== deleteid;
        });
        setAll(filteredAuthors);
    }).catch((err) => {
        console.log("error deleting author", err.res)
    })
}
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 fluid">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Author</th>
                                <th scope="col">Actions Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all.map((author, index) => {
                                return (
                                    <tr key={author._id}>
                                        <td>{author.name}</td>
                                        <td> <Link to={`/edit/${author._id}`}><button className="btn btn-primary m-2">Edit</button></Link>
                                        <button onClick={() => deleteHandler(author._id)}className="btn btn-danger m-2">Delete</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllAuthors;
