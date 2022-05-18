import styles from './Table.module.scss'

const Table = ({ columnsNumber, columnsTitles, children }) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{columnsTitles && columnsTitles.map(((t, idx) => (
						<td key={`title${idx}`}>{t}</td>
					)))}
				</tr>
			</thead>
			<tbody>
				{children}
			</tbody>
		</table>
	)
}

export default Table