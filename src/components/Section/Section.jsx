import { useState } from 'react'
import styles from './Section.module.scss'

const Section = () => {

	const [addValue, setAddValue] = useState('')
	const [task, setTask] = useState ([])

	const onInputValue = (e) => {
		setAddValue(e.target.value)
	}

	const onEnterPress = (e) => {
		if(e.code === 'Enter') {
			onAddTask()
		}
	}

	const onAddTask = () => {
		if (!addValue) return
		setTask([...task, addValue])
		setAddValue('')
	}
	
	return (
		<>	
		<tr>
			<td colspan="6" className={styles.inputWithBtn}>
				<input placeholder='Строительный раздел' value={addValue} onChange={onInputValue} onKeyPress={onEnterPress}/>
				<button onClick={onAddTask} style={{color: addValue ? 'green' : 'red'}}>Добавить</button>
			</td>
		</tr>
		{task.map((task, i) => (
			<tr key={i} className={styles.childrenSection}>
				<td colspan="1">{i + 1}</td>
				<td colspan="5">Раздел: {task}</td>
			</tr>
		))}
		
		</>
	)
}

export default Section