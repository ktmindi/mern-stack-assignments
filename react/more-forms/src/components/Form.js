import React, {useState} from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const obj = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    }

    return (
        <div>
            <div>
                <form className="form col-4 mx-auto">
                    <label className="form-label">First Name:</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} className="form-control" />
                    {
                        firstName.length < 2 ? <p className="text-danger">First name must be at least 2 characters</p> : null
                    }
                    <label className="form-label">Last Name:</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} className="form-control" />
                    {
                        lastName.length < 2 ? <p className="text-danger">First name must be at least 2 characters</p> : null
                    }
                    <label className="form-label">Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    {
                        email.length < 5 ? <p className="text-danger">Email must be at least 5 characters</p> : null
                    }
                    <label className="form-label">Password:</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    {
                        password.length < 8 ? <p className="text-danger"> Password must be at least 8 characters </p> : null
                    }
                    <label className="form-label">Confirm Password:</label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" />
                    {confirmPw !== password? <p> passwords must match </p> : null }
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