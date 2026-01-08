import { NavLink } from "react-router-dom"

import css from './AuthMenu.module.css'

export const AuthMenu = () => {
    return(
        <div>
            <NavLink className={css.link} to='/register'>Register</NavLink>
            <NavLink className={css.link} to='/login'>Login</NavLink>

        </div>
    )
}