import styles from './ProjectCard.module.scss'
import { Link } from 'react-router-dom'

const ProjectCard = ({ item }) => {
	return (
	
		<Link to={`/project/${item.id}`} className={styles.projectCard}>
			<h2>{item.name}</h2>
			<span>{item.address}</span>
		</Link>
		
	)
}

export default ProjectCard