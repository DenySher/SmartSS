import { useState } from 'react'
import { apiCreateSubection } from '../../api/tools'
import InputWithButton from '../InputWithButton/InputWithButton'
import Subsection from '../Subsection/Subsection'
import styles from './Section.module.scss'
import Modal from '../Modal/Modal'
import { useAppContext } from '../../contexts/AppContext'

const Section = ({ num, section }) => {

	const [open, setOpen] = useState(false)
	const [data, setData] = useState(section)

	const [addValue, setAddValue] = useState('')

	const { modalVisible, setModalVisible } = useAppContext()

	const onAddTask = () => {
		if (addValue.length > 2) {
			apiCreateSubection(
				section.id,
				[
					...section.sections,
					{ name: addValue }
				]
			).then((res) => {
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
			<tr className={styles.childrenSection} onClick={() => setOpen(!open)}>
				<td colSpan="1">{num}</td>
				<td colSpan="5">Раздел: {section.name}</td>
			</tr>
		{/* 			
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
			</tr>} */}
			{open && data && data.sections && data.sections.map((section, idx) => (
				<Subsection key={`subsection${idx}`} num={`${num}.${idx + 1}`} subsection={section} updateData={updateData} section={data} idx={idx} />
			))}
			
			<button onClick={() => setModalVisible({...modalVisible, sec2: !modalVisible.sec2})}>Добавить подраздел</button>
			
			{modalVisible.sec2 ? (
            <Modal>
                <InputWithButton
                    placeholder='Добавить подраздел'
                    value={addValue}
                    setValue={setAddValue}
                    buttonText='Добавить'
                    onClick={() => onAddTask()}
                />
            </Modal>
            ) : null}

			
		</>
	)
}

export default Section