import ButtonAction from '../Common/ButtonAction/ButtonAction'
import Icon from '../Icon/Icon'
import styles from './SectionTitle.module.scss'

const SectionTitle = ({ num, name, id, open, setOpen, deleteFunction, small }) => {
	return (
		<tr className={[styles.sectionTitle, open && styles.active, small && styles.small].join(' ')} onClick={() => setOpen(!open)}>
			<td colSpan="1">{num}</td>
			<td colSpan="5">
				<div className={styles.nameSection}>
					<div>
						<h4>{name}</h4>
						<div className={styles.actionButtons}>
							<ButtonAction icon='pencil' onClick={() => alert('удалить?')} />
							<ButtonAction icon='trash' onClick={() => deleteFunction(id)} />
						</div>
					</div>
					<Icon icon={open ? 'chevron-up' : 'chevron-down'} size={18} color={open ? 'white' : 'black'} />
				</div>
			</td>
		</tr>
	)
}

export default SectionTitle