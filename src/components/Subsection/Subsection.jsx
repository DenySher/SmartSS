import { useState } from 'react'
import { apiAddToolsToSubsection, apiCreateTool } from '../../api/tools'
import AddPositionPrice from '../AddPositionPrice/AddPositionPrice'
import SectionTool from '../SectionTool/SectionTool'
import styles from './Section.module.scss'

const Subsection = ({ num, subsection, section, idx, updateData }) => {

	const [open, setOpen] = useState(false)
	const [addValue, setAddValue] = useState(
		{
			id: null,
			name: '',
			qty: 0,
			price: 0
		}
	)

	const addTool = () => {
		if (addValue.id) {
			const newSectionsArr = [...section.sections]
			newSectionsArr[idx].tools = [...section.sections[idx].tools, { tool: { id: addValue.id }, qty: addValue.qty, price: addValue.price }]
			apiAddToolsToSubsection(
				section.id,
				newSectionsArr
			).then((res) => {
				updateData(res)
				setAddValue({
					id: null,
					name: '',
					qty: 0,
					price: 0
				})
			})
		} else {
			apiCreateTool(addValue.name).then((res) => {
				const newSectionsArr = [...section.sections]
				newSectionsArr[idx].tools = [...section.sections[idx].tools, { tool: { id: res.id }, qty: addValue.qty, price: addValue.price }]
				apiAddToolsToSubsection(
					section.id,
					newSectionsArr
				).then((res) => {
					updateData(res)
					setAddValue({
						id: null,
						name: '',
						qty: 0,
						price: 0
					})
				})
			})
		}
	}

	return (
		<>
			<tr className={styles.childrenSection} onClick={() => setOpen(!open)}>
				<td colSpan="1">{num}</td>
				<td colSpan="5">{subsection.name}</td>
			</tr>
			{open && subsection && subsection.tools && subsection.tools.map((tool, idx) => (
				<SectionTool key={`tool${idx}`} num={`${num}.${idx + 1}`} tool={tool} />
			))}
			{open && <AddPositionPrice inputs={addValue} setInputs={setAddValue} addItem={addTool} />}
		</>
	)
}

export default Subsection