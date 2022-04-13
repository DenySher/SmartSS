import ProjectDetails from "../../components/ProjectDetails/ProjectDetails"
import { useParams } from "react-router-dom";

const ProjectPage = () => {

    let { id } = useParams();

    return (
        <ProjectDetails id={id} />
    )
}

export default ProjectPage