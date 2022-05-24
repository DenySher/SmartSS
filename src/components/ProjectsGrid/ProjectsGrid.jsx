import { useEffect, useState } from 'react'
import { apiGetProjects } from '../../api/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './ProjectsGrid.module.scss'
import { apiDeleteProject } from '../../api/projects'
import { apiGetProject } from '../../api/projects'

const ProjectsGrid = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        apiGetProjects().then((res) => {
            setData(res);
        })
    }, [])

    const deleteProject = (id) => {
        let deleteProject = window.confirm('Удалить раздел?');
        deleteProject && apiDeleteProject(id).then(res => {
            apiGetProject(data.id).then(r => {
                updateData(r)
            })
        })
    }

    const updateData = (newData) => {
        if (newData) {
            setData(newData)
        }
    }

    return (
        <div className={styles.works}>
            {data.length > 0 && data.map((item, idx) => (
                <ProjectCard key={`project${idx}`} item={item} deleteProject={deleteProject}/>
            ))}
        </div>
    )
}

export default ProjectsGrid