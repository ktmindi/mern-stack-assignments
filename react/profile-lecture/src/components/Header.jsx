import {Link, NavLink} from 'react-router-dom'

export default () => {
    return(
        <div id="header">
            <h1> Welcome to Find me!</h1>
            <NavLink to='/add'>
                <button>Add Profile</button>
            </NavLink>
            <NavLink to='/profile'>
                <button>Profiles</button>
            </NavLink>
        </div>
    )
}

