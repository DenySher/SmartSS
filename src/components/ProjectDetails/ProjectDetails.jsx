import { useEffect, useState } from 'react'
import { apiGetProject } from '../../api/projects'
import OpenPrice from '../OpenPrice/OpenPrice'
import ProjectWorkers from '../ProjectWorkers/ProjectWorkers'
import Section from '../Section/Section'
import styles from './ProjectDetails.module.scss'

const ProjectDetails = ({ id }) => {

    const [data, setData] = useState(null)
    const [open, setOpen] = useState({
        sec1: false,
        sec2: false,
        sec3: false
    })

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
                        <nav className={styles.dataProjectNav}>
                            <button className={styles.navBtn} onClick={() => setOpen({ ...open, sec1: !open.sec1, sec2: null, sec3: null})}>Прайс</button>
                            <button className={styles.navBtn} onClick={() => setOpen({ ...open, sec2: !open.sec2, sec1: null, sec3: null})}>Снабжение</button>
                            <button className={styles.navBtn} onClick={() => setOpen({ ...open, sec3: !open.sec3, sec1: null, sec2: null})}>Рабочие</button>
                        </nav>
                    </div>
                    <OpenPrice open={open.sec1} />
                    
                    {open.sec1 ? (
                        <Section >

                        </Section>
                    ) : null}
                    {open.sec3 ? (
                        <ProjectWorkers id={data.id} workers={data.workers} />
                    ) : null}
                </div>
            ) : null}
        </>
    )
}

export default ProjectDetails