import { useState } from 'react'
import Subsection from '../Subsection/Subsection'
import styles from './Section.module.scss'

const Section = ({ num, section }) => {

	const [open, setOpen] = useState(false)

	return (
		<>
			<tr className={styles.childrenSection} onClick={() => setOpen(!open)}>
				<td colSpan="1">{num}</td>
				<td colSpan="5">{section.name}</td>
			</tr>
			{open && section && section.sections && section.sections.map((section, idx) => (
				<Subsection num={`${num}.${idx + 1}`} subsection={section} />
			))}
		</>
	)
}

export default Section