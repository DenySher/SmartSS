import { useEffect, useState } from 'react'
import { apiGetProject } from '../../api/projects'
import OpenPrice from '../OpenPrice/OpenPrice'
import styles from './ProjectDetails.module.scss'

const ProjectDetails = ({ id }) => {

    const [data, setData] = useState(null)
    const [open, setOpen] = useState(false)

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
                            <h2>{data.name}</h2>
                        </div>
                        <div>
                            <h4>{data.address}</h4>
                        </div>
                        {data.manager ? (
                            <div>
                                <h4>прораб:</h4>
                                <h4>{data.manager.name}</h4>
                            </div>
                        ) : null}
                    </div>

                    <div className={styles.dataDetailsOpen}>
                        <h3>Рабочие:</h3>
                        <button>открыть</button>
                    </div>
                    <div className={styles.dataDetailsOpen}>
                        <h3>Прайс:</h3>
                        <button onClick={() => setOpen(true)}>открыть</button>
                    </div>
                    {open ? 
                            (<OpenPrice />)
                        : null }
                    <div className={styles.dataDetailsOpen}>
                        <h3>Оборудование:</h3>
                        <button>открыть</button>
                    </div>
                    <div className={styles.dataDetailsOpen}>
                        <h3>Инструмент:</h3>
                        <button>открыть</button>
                    </div>
                </div>

            ) : null}

        </>
    )
}

export default ProjectDetails