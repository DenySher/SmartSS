import { useState } from 'react'
import { apiCreateSubection, apiUpdateSection } from '../../api/tools'
import InputWithButton from '../InputWithButton/InputWithButton'
import Subsection from '../Subsection/Subsection'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Section.module.scss'

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

	const deleteSubsection = (id) => {
		let deleteSubsection = window.confirm('Удалить подраздел?');
		deleteSubsection && apiUpdateSection(data.id, {
			sections: [...data.sections].filter(s => s.id === id ? false : true)
		}).then(res => {
			setData(res)
		})
	}

	return (
		<>
			<SectionTitle
				num={num}
				name={section.name}
				open={open}
				setOpen={setOpen}
				id={section.id}
				deleteFunction={deleteSection}
			/>
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
				<Subsection
					key={`subsection${idx}`}
					num={`${num}.${idx + 1}`}
					subsection={section}
					updateData={updateData}
					section={data}
					idx={idx}
					deleteSubsection={deleteSubsection}
				/>
			))}
		</>
	)
}

export default Section