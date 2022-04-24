import { useEffect, useState } from 'react'
import { apiGetProject } from '../../api/projects'
import OpenPrice from '../OpenPrice/OpenPrice'
import Section from '../Section/Section'
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
                            <button className={styles.navBtn} onClick={() => setOpen(!open)}>Прайс</button>
                            <button className={styles.navBtn}>Снабжение</button>
                            <button className={styles.navBtn}>Рабочие</button>
                        </nav>
                    </div>
                    <OpenPrice open={open} />
                    {open ?  (
                        <Section >
                            
                        </Section>
                     ) : null}
                </div>
            ) : null}
        </>
    )
}

export default ProjectDetails