import { useState } from 'react'
import { apiAddToolsToSubsection, apiCreateTool } from '../../api/tools'
import AddPositionPrice from '../AddPositionPrice/AddPositionPrice'
import SectionTool from '../SectionTool/SectionTool'
import styles from './Section.module.scss'
import UpArrow from '../assets/Up-arrow.svg'
import DownArrow from '../assets/Down-arrow.svg'

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
				<td colSpan="5" className={styles.nameSubSection}>
					<p className={styles.subSectionP}> 
						<h5>{subsection.name}</h5> {open ? <img src={UpArrow}/>: <img src={DownArrow}/> } 
					</p>
				</td>
			</tr>
			{open && <AddPositionPrice inputs={addValue} setInputs={setAddValue} addItem={addTool} />}
			{open && subsection && subsection.tools && subsection.tools.map((tool, idx) => (
				<SectionTool key={`tool${idx}`} num={`${num}.${idx + 1}`} tool={tool} />
			))}
		</>
	)
}

export default Subsection