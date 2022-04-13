import { useEffect, useState } from 'react'
import { apiGetProject } from '../../api/projects'
import styles from './ProjectDetails.module.scss'

const ProjectDetails = ({id}) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        if (id) {
            apiGetProject(id).then((res) => {
                setData(res)
            })
        }
    }, [id])

    return (
    <>
            {data ? (
                <div className={styles.dataProject}>
                    <div className={styles.dataProjectName}>
                        <div>
                            <h4>объект:</h4>
                            <h2>{data.name}</h2>
                        </div>
                        <div>
                            <h4>адрес:</h4>
                            <h4>{data.address}</h4>
                        </div>
                        <div>
                            <h4>прораб:</h4>
                            <h4>ФИО</h4>
                        </div>
                    </div>
                    
                    <div>
                        <h3>Рабочие:</h3>
                        <button>открыть</button>
                    </div>
                    <div>
                        <h3>Прайс:</h3>
                        <button>открыть</button>
                        </div>
                    <div>
                        <h3>Оборудование:</h3>
                        <button>открыть</button>
                    </div>
                    <div>
                        <h3>Инструмент:</h3>
                        <button>открыть</button>
                    </div>
                </div>
       ) : null}
    </>
    )
}

export default ProjectDetails