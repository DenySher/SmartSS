import { useState } from 'react'
import styles from './Section.module.scss'

const Section = () => {

	const [open, setOpen] = useState(false)

	return (
		<div className={styles.containerSection}>
			<div className={styles.section}>
				<input className={styles.sectionTitle} placeholder='Строительный раздел'></input>
				<button onClick={() => setOpen(!open)}>{open ? 'Скрыть' : 'Открыть'}</button>
			</div>
			{open ? (
				<div className={styles.subSection}>
					<input placeholder='Параграф'></input>
					<button onClick={() => setOpen(!open)}>Добавить</button>
				</div >
			) : null}
		</div>
	)
}

export default Section