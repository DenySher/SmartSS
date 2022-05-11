import Icon from '../../Icon/Icon'
import styles from './ButtonAction.module.scss'

const ButtonAction = ({ icon, onClick }) => {
	return (
		<button onClick={onClick} className={styles.buttonAction}>
			<Icon icon={icon} size={16} color='gray' />
		</button>
	)
}

export default ButtonAction