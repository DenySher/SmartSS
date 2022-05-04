import { useAppContext } from '../../contexts/AppContext'
import ClientOnlyPortal from '../Portal/Portal'
import styles from './Modal.module.scss'

const Modal = ({ children }) => {

	const { modalVisible, setModalVisible } = useAppContext();

	if (!modalVisible) return null

	return (
		<ClientOnlyPortal selector="#modal">
			<div className={styles.modal}>
				{children}
			</div>
			<div className={styles.overlay} onClick={() => setModalVisible(false)}></div>
		</ClientOnlyPortal>
	)
}

export default Modal