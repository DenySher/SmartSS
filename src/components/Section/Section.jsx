import React, { useState } from 'react'
import { apiCreateSubsection, apiDeleteSection } from '../../api/tools'
import AddPositionPrice from '../AddPositionPrice/AddPositionPrice'
import InputWithButton from '../InputWithButton/InputWithButton'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Section.module.scss'

const Section = ({ num, section, subsection }) => {

	const [open, setOpen] = useState(false)
	const [data, setData] = useState(section)
	const [addValue, setAddValue] = useState('')

	const onAddTask = () => {
		if (addValue.length > 2) {
			apiCreateSubsection(addValue, section.id).then((res) => {
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

	const deleteSection = (id) => {
		let deleteSection = window.confirm('Удалить?');
		deleteSection && apiDeleteSection(id).then(res => {
			// ....
		})
	}

	const addTool = () => {
		// if (addValue.id) {
		// 	const newSectionsArr = [...section.sections]
		// 	newSectionsArr[idx].tools = [...section.sections[idx].tools, { tool: { id: addValue.id }, qty: addValue.qty, price: addValue.price }]
		// 	apiAddToolsToSubsection(
		// 		section.id,
		// 		newSectionsArr
		// 	).then((res) => {
		// 		updateData(res)
		// 		setAddValue({
		// 			id: null,
		// 			name: '',
		// 			qty: 0,
		// 			price: 0
		// 		})
		// 	})
		// } else {
		// 	apiCreateTool(addValue.name).then((res) => {
		// 		const newSectionsArr = [...section.sections]
		// 		newSectionsArr[idx].tools = [...section.sections[idx].tools, { tool: { id: res.id }, qty: addValue.qty, price: addValue.price }]
		// 		apiAddToolsToSubsection(
		// 			section.id,
		// 			newSectionsArr
		// 		).then((res) => {
		// 			updateData(res)
		// 			setAddValue({
		// 				id: null,
		// 				name: '',
		// 				qty: 0,
		// 				price: 0
		// 			})
		// 		})
		// 	})
		// }
	}

	return (
		<>
			<SectionTitle
				num={num}
				name={section.attributes.name}
				open={open}
				setOpen={setOpen}
				id={section.id}
				deleteFunction={deleteSection}
			/>
			{open && (
				<>
					{subsection ? (
						<AddPositionPrice inputs={addValue} setInputs={setAddValue} addItem={addTool} />
					) : (
						<tr>
							<td colSpan="6" className={styles.inputWithBtn}>
								<InputWithButton
									placeholder='Добавить подраздел'
									value={addValue}
									setValue={setAddValue}
									buttonText='Добавить'
									onClick={() => onAddTask()}
								/>
							</td>
						</tr>
					)}
				</>
			)}
			{open && data?.attributes?.subsections?.data && data.attributes.subsections.data.map((subsection, idx) => (
				<Section key={`subsection${idx}`} num={`${num}.${idx + 1}`} section={subsection} deleteSection={deleteSection} subsection />
			))}
		</>
	)
}

export default React.memo(Section)