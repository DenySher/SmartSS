import { useEffect, useState } from 'react'
import { apiGetProjects } from '../../api/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectsGrid.module.scss'

const ProjectsGrid = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        apiGetProjects().then((res) => {
            setData(res);
        })
    }, [])

    return (
        <div className={styles.works}>
            {data.length > 0 && data.map((item, idx) => (
                <ProjectCard key={`project${idx}`} item={item} />
            ))}
        </div>
    )
}

export default ProjectsGrid