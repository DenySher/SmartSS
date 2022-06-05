import styles from './ProjectCard.module.scss'
import { Link } from 'react-router-dom'

const ProjectCard = ({ item, deleteProject }) => {

	return (
		<>
			<Link to={`/project/${item.id}`} className={styles.projectCard}>

				<h2>{item.attributes.name}</h2>
				<span>{item.attributes.address}</span>
			</Link>
			<button onClick={() => deleteProject(item.id)}>Удалить</button>
		</>
	)
}

export default ProjectCard