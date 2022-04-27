import { useState } from 'react'

import styles from "./SavePriceDetails.module.scss"
import Section from '../Section/Section'
import InputWithButton from '../InputWithButton/InputWithButton'
import { apiAddSectionToProject, apiCreateSection } from '../../api/tools'

const SavePriceDetails = ({ sections, projectID, updateData }) => {

    const [addValue, setAddValue] = useState('')

    // const onEnterPress = (e) => {
    //     if (e.code === 'Enter') {
    //         onAddTask()
    //     }
    // }

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

    return (
        <>
            <table className={styles.tableContainer}>
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
                                placeholder='Строительный раздел'
                                value={addValue}
                                setValue={setAddValue}
                                buttonText='Добавить'
                                onClick={() => onAddTask()}
                            />
                        </td>
                    </tr>
                    {sections && sections.map((section, idx) => (
                        <Section key={`section${idx}`} num={idx + 1} section={section} />
                    ))}
                </tbody>
            </table>
            <button>SAVE</button>
        </>
    )
}

export default SavePriceDetails