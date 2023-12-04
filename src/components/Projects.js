import styled from "styled-components"
import { Card } from "./Card"

const projects = [
    {
        title: "Nuevas Constelaciones Familiares",
        description: "Primer pagina web realizada con los conocimientos adquiridos en la materia de desarrollo web de teclab y cursos complementarios.",
        getImageSrc: () => require("../components/images/projects/constelaciones.jpg")
    },
    {
        title: "Laboratorio de Análisis Clínicos",
        description: "Este proyecto fue realizado como final de mi cursado académico en teclab, el cual consiste en simular una pagina para un laboratorio el cual muestre los análisis que realiza y los diferentes horarios de atención, tanto telefónicos como el de las distintas sedes.",
        getImageSrc: () => require("../components/images/projects/lab.jpg")
    },
]
export const Projects = () => {
    return(
        <ContainerProjects>
            {projects.map((project) =>(
                <Card
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.getImageSrc()}
                />
            ))}
        </ContainerProjects>
    )
}
const ContainerProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
