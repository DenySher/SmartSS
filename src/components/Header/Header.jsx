import UserName from '../UserName/UserName'
import styles from './Header.module.scss'

import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to='/'>Home</Link>
			<Link to='/create'>CreatePro</Link>
			<UserName />
		</header>
	)
}

export default Header