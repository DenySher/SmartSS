import { useState } from 'react'

import styles from "./ProjectPrice.module.scss"
import Section from '../Section/Section'
import InputWithButton from '../InputWithButton/InputWithButton'
import { apiAddSectionToProject, apiCreateSection, apiDeleteSection } from '../../api/tools'
import Modal from '../Modal/Modal'
import { useAppContext } from '../../contexts/AppContext'
import { apiGetProject } from '../../api/projects'

const SavePriceDetails = ({ sections, projectID, updateData }) => {

    const [addValue, setAddValue] = useState('')

    const { modalVisible, setModalVisible } = useAppContext()

    const onAddTask = () => {
        if (addValue.length > 2) {
            apiCreateSection(addValue).then((res) => {
                apiAddSectionToProject([...sections, res.id], projectID).then((res) => {
                    updateData(res)
                    setAddValue('')
                })
            })
        }
    }

    const deleteSection = (id) => {
        apiDeleteSection(id).then(res => {
            apiGetProject(projectID).then(r => {
                updateData(r)
            })
        })
    }

    return (
        <>
            <table className={styles.projectPriceTable}>
                <thead className={styles.headerPrice}>
                    <tr>
                        <td>№</td>
                        <td>Наименование</td>
                        <td>Ед. изм.</td>
                        <td>Кол-во</td>
                        <td>Цена за ед.</td>
                        <td>Всего</td>
                    </tr>
                </thead>
                <tbody>
                    {sections && sections.map((section, idx) => (
                        <Section key={`section${idx}`} num={idx + 1} section={section} deleteSection={deleteSection} />
                    ))}
                </tbody>
            </table>

            <button onClick={() => setModalVisible({ ...modalVisible, sec1: !modalVisible.sec1 })}>Добавить раздел</button>

            {modalVisible.sec1 ? (
                <Modal>
                    <InputWithButton
                        placeholder='Добавить строительный раздел'
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

export default SavePriceDetails