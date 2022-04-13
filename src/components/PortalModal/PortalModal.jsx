import styles from './PortalModal'
import ReactDOM from 'react-dom'

const PortalModal = ({message, isOpen}) => {
   
    if (!isOpen) return null

    return ReactDOM.createPortal (
        <div className={styles.PortalModal}>
            <input text='добавить рабочего' /> 
            <button text='+' />      
        </div>
    )
}

export default PortalModal