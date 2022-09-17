import React, {useState} from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <div>
            <div>
                <form className="form col-4 mx-auto">
                    <label className="form-label">First Name:</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} className="form-control" />
                    <label className="form-label">Last Name:</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} className="form-control" />
                    <label className="form-label">Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    <label className="form-label">Password:</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    <label className="form-label">Confirm Password:</label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" />
                </form>
            </div>
            <div>
                <h3>Your Form Data</h3>
                <p><label>First Name: </label>{ firstName }</p>
                <p><label>Last Name: </label>{ lastName }</p>
                <p><label>Email: </label>{ email }</p>
                <p><label>Password: </label>{ password }</p>
                <p><label>Confirm Password: </label>{ confirmPassword }</p>
            </div>
        </div>
    )
}
export default Form