import styled from "styled-components"
import { Card } from "./Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Nuevas Constelaciones Familiares",
        technologies: "HTML5, CSS3, JavaScript",
        getImageSrc: () => require("../components/images/projects/constelaciones.jpg"),
        link: "https://constelaciones-familiares-mh.com/constelaciones-familiares/",
    },
    {   
        id: 2,
        title: "Laboratorio de Análisis Clínicos",
        technologies: "HTML5, CSS3, JavaScript, React.JS",
        getImageSrc: () => require("../components/images/projects/lab.jpg"),
        link: "https://analisisclinicos.netlify.app/",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet",
        technologies: "Lorem ipsum dolor sit amet",
        getImageSrc: () => require("../components/images/projects/lorem.jpg"),
        
    },
    {
        id: 4,
        title: "Lorem ipsum ",
        technologies: "Lorem ipsum",
        getImageSrc: () => require("../components/images/projects/lorem.jpg"),
        
    },
]
export const Projects = () => {
    return(
        <motion.article
            style={{width:'100%'}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
        >
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
        </motion.article>
    )
}
const TitleSection = styled.h2`
    color: rgba(215, 215, 215, 1);
`;
const Icon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    padding-left: 1rem;
`;
const ContainerProjects = styled.section`
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    gap: 1.5rem;
    @media(max-width: 750px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
