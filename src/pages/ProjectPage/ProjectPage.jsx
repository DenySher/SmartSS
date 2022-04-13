import { useParams } from "react-router-dom";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails"

const ProjectPage = () => {

    let { id } = useParams();

    return (
        <ProjectDetails id={id} />
    )
}

export default ProjectPage