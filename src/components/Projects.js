import styled from "styled-components"
import { Card } from "./Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"

const projects = [
    {   
        id: 2,
        title: "Laboratorio de Análisis Clínicos",
        technologies: "HTML5, CSS3, JavaScript, React.JS",
        getImageSrc: () => require("../components/images/projects/lab.jpg"),
        link: "https://analisisclinicos.netlify.app/",
    },
    {
        id: 1,
        title: "Nuevas Constelaciones Familiares",
        technologies: "HTML5, CSS3, JavaScript",
        getImageSrc: () => require("../components/images/projects/constelaciones.jpg"),
        link: "https://constelaciones-familiares-mh.com/constelaciones-familiares/",
    },
]
export const Projects = () => {
    return(
        <ContainerSection>
            <TitleSection>Projects<Icon icon={faBriefcase}/></TitleSection>
            <ContainerProjects>
                {projects.map((project) =>(
                    <Card
                        key={project.id}
                        title={project.title}
                        technologies={project.technologies}
                        imageSrc={project.getImageSrc()}
                        link={project.link}
                    />
                ))}
            </ContainerProjects>
        </ContainerSection>
    )
}
const ContainerSection = styled.article`
    padding: 20px;
`;
const TitleSection = styled.h2`
    color: #D7D7D7;
    padding: 10px 0;
`;
const Icon = styled(FontAwesomeIcon)`
    font-size: 1.2rem;
    padding-left: 1rem;
`;
const ContainerProjects = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    @media(max-width: 690px){
        flex-direction: column;
    }
`;
