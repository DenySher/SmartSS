import { useState } from 'react'
import { apiAddToolsToSubsection, apiCreateTool, apiUpdateSection } from '../../api/tools'
import AddPositionPrice from '../AddPositionPrice/AddPositionPrice'
import SectionTool from '../SectionTool/SectionTool'
import styles from './Section.module.scss'
import Icon from '../Icon/Icon'
import ButtonAction from '../Common/ButtonAction/ButtonAction'

const Subsection = ({ num, subsection, section, idx, updateData, deleteSubsection }) => {

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

	const deleteTool = (toolId) => {
		let deleteTool = window.confirm('Удалить позицию?');
		if (deleteTool) {
			const newSectionsArr = [...section.sections]
			newSectionsArr[idx].tools = [...section.sections[idx].tools].filter(t => t.id === toolId ? false : true)
			apiUpdateSection(section.id, {
				sections: newSectionsArr
			}).then(res => {
				updateData(res)
			})
		}
	}

	return (
		<>
			<tr className={[styles.childrenSection, open && styles.active].join(' ')} onClick={() => setOpen(!open)}>
				<td colSpan="1">{num}</td>
				<td colSpan="5">
					<div className={styles.nameSection}>
						<div>
							<h5>{subsection.name}</h5>
							<div className={styles.actionButtons}>
								<ButtonAction icon='pencil' onClick={() => alert('удалить?')} />
								<ButtonAction icon='trash' onClick={() => deleteSubsection(subsection.id)} />
							</div>
						</div>
						<Icon icon={open ? 'chevron-up' : 'chevron-down'} size={18} color={open ? 'white' : 'black'} />
					</div>
				</td>
			</tr>
			{open && <AddPositionPrice inputs={addValue} setInputs={setAddValue} addItem={addTool} />}
			{open && subsection && subsection.tools && subsection.tools.map((tool, idx) => (
				<SectionTool key={`tool${idx}`} num={`${num}.${idx + 1}`} tool={tool} deleteTool={deleteTool} />
			))}
		</>
	)
}

export default Subsection