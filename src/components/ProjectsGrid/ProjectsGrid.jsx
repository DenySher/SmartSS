import { useEffect, useState } from 'react'
import { apiGetProjects } from '../../api/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectsGrid.module.scss'
import { apiDeleteProject } from '../../api/projects'

const ProjectsGrid = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        apiGetProjects().then((res) => {
            setData(res);
        })
    }, [])

    const deleteProject = (id) => {
        let deleteProject = window.confirm('Удалить раздел?');
        deleteProject && apiDeleteProject(id).then(res => {
            apiGetProjects().then((r) => {
                setData(r);
            })
        })
    }

    return (
        <div className={styles.works}>
            {data?.data && data.data.map((item, idx) => (
                <ProjectCard key={`project${idx}`} item={item} deleteProject={deleteProject} />
            ))}
        </div>
    )
}

export default ProjectsGrid