import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"

export default function Navbar(){
    return(
        <Nav>
            <Anchor href="mailto: franciscointelangelo@gmail.com"><Icon icon={faEnvelope}/></Anchor>
            <Anchor href="https://github.com/francisco-intelangelo" target="_blank" rel="noreferrer"><Icon icon={faGithub}/></Anchor>
            <Anchor href="https://linkedin.com/in/francisco-intelangelo" target="_blank" rel="noreferrer"><Icon icon={faLinkedin}/></Anchor>
            <Anchor href="#projects">Projects</Anchor>
            <Anchor href="#contact">Contact Me</Anchor>
        </Nav>
    )
}
const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #18181b;
    justify-content: center;
    align-items: center;
`;
const Anchor = styled.a`
    padding: 10px;
    text-decoration: none;
    color: #d7d7d7;
    font-size: 1em;
`;
const Icon = styled(FontAwesomeIcon)`
    width: 1em;
    color: #d7d7d7;
`;