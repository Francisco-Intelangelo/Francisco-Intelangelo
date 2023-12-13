import styled from "styled-components";
import { motion } from "framer-motion";
import avatar from "./images/avatar.jpg"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Profile = () => {
    return(
        <ContainerProfile>
            <motion.img 
                src={avatar} 
                alt="avatar" 
                style={{width: '150px', aspectRatio: '1036/1037', borderRadius: '50%'}}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001}}}
            />
            <ContainerDiv>
                <TitleLanding>Francisco Intelangelo</TitleLanding>
                <TxtLanding>Front-End Developer</TxtLanding>
                <ContainerSocials>
                    <Anchor href="mailto: franciscointelangelo@gmail.com">
                        <Icon icon={faEnvelope}/>
                    </Anchor>
                    <Anchor href="https://linkedin.com/in/francisco-intelangelo" target="_blank" rel="noreferrer">
                        <Icon icon={faLinkedin}/>
                    </Anchor>
                    <Anchor href="https://github.com/francisco-intelangelo" target="_blank" rel="noreferrer">
                        <Icon icon={faGithub}/>
                    </Anchor>
                </ContainerSocials>
            </ContainerDiv>
        </ContainerProfile>
    )
}
const ContainerProfile = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 1.5rem;
`;
const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const TitleLanding = styled.h1`
    color: #d7d7d7;
    font-size: 2.2rem;
    margin: 0;
`;
const TxtLanding = styled.p`
    color: #d7d7d7;
    margin: 0;
    font-size: 1.2rem;
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
    font-size: 1.2rem;
    cursor: pointer;
    background: rgba(62, 99, 149, 1);
    border-radius: .3rem .8rem;
    padding: 5px 10px;
    & :hover{
        box-shadow: 2px 2px 2px #fff;
    }
`;