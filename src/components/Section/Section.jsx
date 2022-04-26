import { useState } from 'react'
import styles from './Section.module.scss'
import InputSuggestions from '../InputSuggestions/InputSuggestions'

const Section = () => {

	const [open, setOpen] = useState(false)

	return (
		<>
		<table>
			<tbody>
				<tr>
					<td className={styles.inputWithBtn}>
						<input placeholder='Строительный объект' />
						<button onClick={() => setOpen(!open)}>{open ? 'Скрыть' : 'Открыть'}</button>
					</td>
				</tr>
				{open ? (
					<tr>
						<td className={styles.inputWithBtn}>
							<input placeholder='Параграф'></input>
							<button onClick={() => setOpen(!open)}>Скрыть</button>
						</td >
					</tr>
			) : null}
			</tbody>
		</table>
		</>

	)
}

export default Section