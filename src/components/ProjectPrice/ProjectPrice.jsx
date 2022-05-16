import { useState } from 'react'

import styles from "./ProjectPrice.module.scss"
import Section from '../Section/Section'
import InputWithButton from '../InputWithButton/InputWithButton'
import { apiAddSectionToProject, apiCreateSection, apiDeleteSection } from '../../api/tools'
import { apiGetProject } from '../../api/projects'

const SavePriceDetails = ({ sections, projectID, updateData }) => {

    const [addValue, setAddValue] = useState('')

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
                    <tr>
                        <td colSpan="6" className={styles.inputWithBtn}>
                            <InputWithButton
                                placeholder='Добавить раздел'
                                value={addValue}
                                setValue={setAddValue}
                                buttonText='Добавить'
                                onClick={() => onAddTask()}
                            />
                        </td>
                    </tr>
                    {sections && sections.map((section, idx) => (
                        <Section key={`section${idx}`} num={idx + 1} section={section} deleteSection={deleteSection} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default SavePriceDetails