import { useState } from 'react'
import { apiAddToolsToSubsection, apiCreateTool, apiUpdateSection } from '../../api/tools'
import AddPositionPrice from '../AddPositionPrice/AddPositionPrice'
import SectionTool from '../SectionTool/SectionTool'
import SectionTitle from '../SectionTitle/SectionTitle'

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
			<SectionTitle
				num={num}
				name={subsection.name}
				open={open}
				setOpen={setOpen}
				id={subsection.id}
				deleteFunction={deleteSubsection}
				small
			/>
			{open && <AddPositionPrice inputs={addValue} setInputs={setAddValue} addItem={addTool} />}
			{open && subsection && subsection.tools && subsection.tools.map((tool, idx) => (
				<SectionTool key={`tool${idx}`} num={`${num}.${idx + 1}`} tool={tool} deleteTool={deleteTool} />
			))}
		</>
	)
}

export default Subsection