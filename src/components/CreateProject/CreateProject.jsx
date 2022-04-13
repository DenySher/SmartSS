import {useState} from 'react'
import Form from '../Form/Form'
import Button from '../Button/Button'
import styles from './CreateProject.module.scss'
import CreatePrice from '../CreatePrice/CreatePrice'
import { apiCreateProject } from '../../api/projects'
import { useNavigate } from 'react-router-dom'

const CreateProject = () => {

    const [workers, setWorkers] = useState([]);
    const [data, setData] = useState({
        name: '',
        address: '',
        manager: {
            name: '',
            id: null
        }
    })

    const navigate = useNavigate()

    const createProject = () => {
        apiCreateProject(data.name, data.address).then((res) => {
            navigate(`/project/${res.id}`)
        })
    }

    const selectManager = (value) => {
        if (value.length > 2) {
            
        }
    }

    return (
        <div className={styles.containerCreateName}>
            <Form>
                <input placeholder='Наименование стройки' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
                <input placeholder='Адрес стройки' value={data.address} onChange={(e) => setData({...data, address: e.target.value})} />
                <input placeholder='Прораб' value={data.manager.name} onChange={(e) => selectManager(e.target.value)} />
                <Button text='ДОБАВИТЬ ПРОЕКТ' onClick={() => createProject()} />
            </Form>
        </div>
    )
}

export default CreateProject