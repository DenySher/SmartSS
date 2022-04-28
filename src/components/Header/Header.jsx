import UserName from '../UserName/UserName'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import home from '../assets/Home.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to='/'><img src={home} className={styles.homePage}/></Link>
			<Link to='/create'>CreatePro</Link>
			<UserName />
			
		</header>
	)
}

export default Header