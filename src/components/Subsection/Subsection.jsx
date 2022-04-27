import { useState } from 'react'
import SectionTool from '../SectionTool/SectionTool'
import styles from './Section.module.scss'

const Subsection = ({ num, subsection }) => {

	const [open, setOpen] = useState(false)

	return (
		<>
			<tr className={styles.childrenSection} onClick={() => setOpen(!open)}>
				<td colSpan="1">{num}</td>
				<td colSpan="5">{subsection.name}</td>
			</tr>
			{open && subsection && subsection.tools && subsection.tools.map((tool, idx) => (
				// <tr key={`tool${idx}`} className={styles.childrenSection}>
				// 	<td>{num}.{idx + 1}</td>
				// 	<td>{tool.tool.name}</td>
				// 	<td>шт.</td>
				// 	<td>{tool.qty}</td>
				// 	<td>{tool.price}</td>
				// 	<td>{tool.price * tool.qty}</td>
				// </tr>
				<SectionTool key={`tool${idx}`} num={`${num}.${idx + 1}`} tool={tool} />
			))}
		</>
	)
}

export default Subsection