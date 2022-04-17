import { useState } from 'react'
import Form from '../Form/Form'
import Button from '../Button/Button'
import styles from './CreateProject.module.scss'
import { apiCreateProject } from '../../api/projects'
import { useNavigate } from 'react-router-dom'
import { apiSearchUsers } from '../../api/users'

const CreateProject = () => {

    const [data, setData] = useState({
        name: '',
        address: '',
        manager: {
            name: '',
            id: null
        }
    })

    const [suggestions, setSuggestions] = useState([]);

    const navigate = useNavigate()

    const createProject = () => {
        apiCreateProject(data.name, data.address, data.manager.id).then((res) => {
            navigate(`/project/${res.id}`)
        })
    }

    const selectManager = (value) => {
        setData({ ...data, manager: { ...data.manager, name: value } })
        if (value.length > 2) {
            apiSearchUsers(value).then((res) => {
                setSuggestions(res);
            })
        }
    }

    return (
        <div className={styles.containerCreateName}>
            <Form>
                <input placeholder='Наименование стройки' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <input placeholder='Адрес стройки' value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />
                <div className={styles.suggestionsContainer}>
                    <input placeholder='Прораб' value={data.manager.name} onChange={(e) => selectManager(e.target.value)} />
                    {suggestions ? (
                        suggestions.map((item, i) => (
                            <div key={i} className={styles.suggestions}>
                                <span className={styles.suggestion} onClick={() => { setData({ ...data, manager: { name: item.name, id: item.id } }); setSuggestions([]) }}>{item.name}</span>
                            </div>
                        ))) : null}
                </div>
                <Button text='ДОБАВИТЬ ПРОЕКТ' onClick={() => createProject()} />
            </Form>
        </div>
    )
}

export default CreateProject