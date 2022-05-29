import { useState } from 'react'
import Section from '../Section/Section'
import InputWithButton from '../InputWithButton/InputWithButton'
import { apiCreateSection, apiDeleteSection } from '../../api/tools'
import { apiGetProject } from '../../api/projects'
import Table from '../Table/Table'

const SavePriceDetails = ({ sections, projectID, updateData }) => {

    const [addValue, setAddValue] = useState('')

    const onAddTask = () => {
        if (addValue.length > 2) {
            apiCreateSection(addValue, projectID).then((res) => {
                console.log(res);
                //updateData(res)
                setAddValue('')
            })
        }
    }

    const deleteSection = (id) => {
        let deleteSection = window.confirm('Удалить раздел?');
        deleteSection && apiDeleteSection(id).then(res => {
            apiGetProject(projectID).then(r => {
                updateData(r)
            })
        })
    }

    return (
        <Table columnsTitles={['№', 'Наименование', 'Ед. изм.', 'Кол-во', 'Цена за ед.', 'Всего']}>
            <tr>
                <td colSpan="6">
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
        </Table>
    )
}

export default SavePriceDetails