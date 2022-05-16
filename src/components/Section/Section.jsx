import { useState } from 'react'
import { apiCreateSubection } from '../../api/tools'
import InputWithButton from '../InputWithButton/InputWithButton'
import Subsection from '../Subsection/Subsection'
import styles from './Section.module.scss'
import Icon from '../Icon/Icon'
import ButtonAction from '../Common/ButtonAction/ButtonAction'

const Section = ({ num, section, deleteSection }) => {

	const [open, setOpen] = useState(false)
	const [data, setData] = useState(section)

	const [addValue, setAddValue] = useState('')


	const onAddTask = () => {
		if (addValue.length > 2) {
			apiCreateSubection(
				section.id,
				[
					...data.sections,
					{ name: addValue }
				]
			).then((res) => {
				console.log(res);
				setAddValue('')
				setData(res)
			})
		}
	}

	const updateData = (newData) => {
		if (newData) {
			setData(newData)
		}
	}

	return (
		<>
			<tr className={[styles.childrenSection, open && styles.active].join(' ')} onClick={() => setOpen(!open)}>
				<td colSpan="1">{num}</td>
				<td colSpan="5">
					<div className={styles.nameSection}>
						<div>
							<h4>{section.name}</h4>
							<div className={styles.actionButtons}>
								<ButtonAction icon='pencil' onClick={() => alert('удалить?')} />
								<ButtonAction icon='trash' onClick={() => deleteSection(section.id)} />
							</div>
						</div>
						<Icon icon={open ? 'chevron-up' : 'chevron-down'} size={18} color={open ? 'white' : 'black'} />
					</div>
				</td>
			</tr>
			{open && <tr>
				<td colSpan="6" className={styles.inputWithBtn}>
					<InputWithButton
						placeholder='Добавить подраздел'
						value={addValue}
						setValue={setAddValue}
						buttonText='Добавить'
						onClick={() => onAddTask()}
					/>
				</td>
			</tr>}
			{open && data && data.sections && data.sections.map((section, idx) => (
				<Subsection key={`subsection${idx}`} num={`${num}.${idx + 1}`} subsection={section} updateData={updateData} section={data} idx={idx} />
			))}

		</>
	)
}

export default Section