import styles from './Form.module.scss'

const Form = ({ children }) => {
	return (
		<div className={styles.form}>
			{children}
		</div>
	)
}

export default Form