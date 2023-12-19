import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"

export const AboutMe = () => {
    return(
        <motion.section
            style={{ color: 'rgba(215, 215, 215, 1)' }}
            initial={{ opacity: 0, scale: .5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
        >
            <h2>About Me <Icon icon={faUser}/></h2>
            <TxtAbout>
                Actualmente estudiando en Coursera la certificación oficial de Meta Front-End Developer.<br/>
                Comencé a interesarme en el desarrollo web del lado front-end durante el cursado de la tecnicatura en programación, en puestos anteriores se me ah reconosido por mi compromiso con la empresa, la autogestion, el desempeño y trabajo en equipo.
            </TxtAbout>
        </motion.section>
    )
}
const Icon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    padding-left: 1rem;
`;
const TxtAbout = styled.p`
    margin: 0;
    font-size: 1.1rem;
`;