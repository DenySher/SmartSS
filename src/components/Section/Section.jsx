import { useState } from 'react'
import styles from './Section.module.scss'

const Section = ({ title, children }) => {
	const [open, setOpen] = useState(false)

	return (
		<div className={styles.section}>
			<div className={styles.sectionHeader} onClick={() => setOpen(!open)}>
				<span className={styles.sectionTitle}>{title}</span>
				<span>{open ? 'Скрыть' : 'Открыть'}</span>
			</div>
			{open ? (
				<div className={styles.sectionBody}>
					{children}
				</div>
			) : null}
		</div>
	)
}

export default Section