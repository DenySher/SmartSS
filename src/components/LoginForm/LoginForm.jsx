import { useState } from 'react'
import Button from '../Button/Button'
import Form from '../Form/Form'
import styles from './LoginForm.module.scss'
import { apiSignIn } from '../../api/users'
import { useAppContext } from '../../contexts/AppContext'

const LoginForm = () => {

    const [data, setData] = useState({ login: '', password: '' })
    const { setAuth, setUser } = useAppContext();

    const startLogin = () => {
        apiSignIn(data.login, data.password).then((res) => {
            if (res.data.jwt) {
                setAuth(true);
                setUser(res.data.user);
            }
        })
    }

    const onEnterPress = (e) => {
        if (e.code === 'Enter') {
            startLogin()
        }
    }

    return (
        <div className={styles.containerLogIn}>
            <Form>
                <input type='text' placeholder="Login" value={data.login}
                    onChange={(e) => setData({ ...data, login: e.target.value })}
                    onKeyPress={onEnterPress}
                />
                <input type='password' placeholder="Password" value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    onKeyPress={onEnterPress}
                />
                <Button className={styles.btnIn} text='Войти' onClick={startLogin} />
            </Form>
        </div>
    )
}

export default LoginForm