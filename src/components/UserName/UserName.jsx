import { useAppContext } from '../../contexts/AppContext';
import cookieCutter from "cookie-cutter";
import styles from './UserName.module.scss'
import Button from '../Button/Button';

const UserName = () => {

    const { auth, user, setAuth, setUser } = useAppContext();

    const signOut = () => {
        setAuth(false);
        setUser(null);
        cookieCutter.set('ourToken', '', { expires: new Date(0) });
    }

    return (
        <div>
            {auth ? (
                <div className={styles.userName}>
                    <span className={styles.u}>{user?.username}</span>
                    <Button onClick={() => signOut()} text='Выйти' />
                </div>
                ) : (
                <span className={styles.u}>user</span>
            )}
        </div>
    )
}

export default UserName