import { logOut } from '../redux/auth/operations';
import css from './UserMenu.module.css'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();
    return(
        <div className={css.wrapper}>
            <h2 className={css.username}>Wlcome, {user.name}</h2>
            <button onClick={() => dispatch(logOut())}>Logout</button>

        </div>
    )
}