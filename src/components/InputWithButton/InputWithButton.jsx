import InputSuggestions from '../InputSuggestions/InputSuggestions'
import styles from './InputWithButton.module.scss'

const InputWithButton = ({ value, setValue, placeholder, buttonText, onClick, suggestions, select }) => {
	return (
		<div className={styles.inputWithButton}>
			<input placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
			<button onClick={onClick}>{buttonText}</button>
			{suggestions && select && <InputSuggestions suggestions={suggestions} select={select} />}
		</div>
	)
}

export default InputWithButton