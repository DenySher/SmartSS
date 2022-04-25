import styles from './InputSuggestions.module.scss'

const InputSuggestions = ({ suggestions, select }) => {

	if (!suggestions.length) {
		return null
	}

	return (
		<div className={styles.suggestions}>
			{suggestions.map((s, i) => (
				<span key={i} onClick={() => select(s)}>{s.name}</span>
			))}
		</div>
	)
}

export default InputSuggestions