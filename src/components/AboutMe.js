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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
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
    font-size: 1.2rem;
`;