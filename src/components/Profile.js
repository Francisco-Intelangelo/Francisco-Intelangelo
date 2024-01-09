import styled from "styled-components";
import { motion } from "framer-motion";
import avatar from "./assets/avatar.jpg"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Profile = () => {
    return(
        <motion.section
            style={{display: 'flex', alignItems: 'center', gap: '1.5rem', paddingTop: '20px'}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0, .7, .5, 1], scale: { type: "spring", damping: 5, stiffness: 90, restDelta: 0.001 } }}
        >
            <Img src={avatar} alt="avatar" style={{width: '150px', aspectRatio: '1036/1037', borderRadius: '50%'}}/>
            <ContainerDiv>
                <TitleLanding>Francisco Intelangelo</TitleLanding>
                <TxtLanding>Front-End Web Developer</TxtLanding>
                <ContainerSocials>
                    <Anchor href="./FranciscoIntelangelo.pdf" download>
                        <Icon icon={faFileDownload}/>
                    </Anchor>
                    <Anchor href="https://linkedin.com/in/francisco-intelangelo" target="_blank" rel="noreferrer">
                        <Icon icon={faLinkedin}/>
                    </Anchor>
                    <Anchor href="https://github.com/francisco-intelangelo" target="_blank" rel="noreferrer">
                        <Icon icon={faGithub}/>
                    </Anchor>
                </ContainerSocials>
            </ContainerDiv>
        </motion.section>
    )
}
const Img = styled.img`
    width: 150px;
    aspect-ratio: 1036/1037;
    border-radius: 50%;
`;
const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: rgba(215, 215, 215, 1);
    gap: 1rem;
`;
const TitleLanding = styled.h1`
    font-size: 2.2rem;
    margin: 0;
`;
const TxtLanding = styled.p`
    margin: 0;
    font-size: 1.2rem;
    @media(max-width: 436px){
        font-size: 1rem;
    }
`;
const ContainerSocials = styled.div`
    display: flex;
    gap: 2rem;
`;
const Anchor = styled.a`
    text-decoration: none;
`;
const Icon = styled(FontAwesomeIcon)`
    color: rgba(215, 215, 215, 1);
    font-size: 1.5rem;
    cursor: pointer;
    background: rgba(62, 99, 149, 1);
    border-radius: .3rem .8rem;
    padding: 5px 10px;
`;