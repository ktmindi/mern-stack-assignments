import React, { useReducer } from 'react';
// We must define initial state: what our state will look like on initial render
const initialState = {
    email: '',
    password: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload
            }
        case "SET_PASSWORD":
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }
}

export default () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleEmailChange = (e) => {
        dispatch({
            type: "SET_EMAIL", 
            payload: e.target.value 
        });
    }
    const handlePasswordChange = (e) => {
        dispatch({
            type: "SET_PASSWORD",
            payload: e.target.value
        })
    }

    return (
        <div>
            <h1>{JSON.stringify(state)}</h1> {/* display current value of state */}
            <div>
                <label>
                    <span>Email</span>
                    <input
                        id="name"
                        value={state.email}
                        onChange={(e) => handleEmailChange(e)}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Password</span>
                    <input
                        id="password"
                        value={state.password}
                        onChange={(e) => handlePasswordChange} 
                    />
                </label>
            </div>
        </div>
    );
}