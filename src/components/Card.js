import styled from "styled-components"
import { motion } from "framer-motion";

export const Card = ({title, imageSrc, technologies, link}) => {
    return(
        <motion.a style={{textDecoration: 'none'}} href={link} target="_blank" rel="noreferrer" whileHover={{ scale: 1.1, transition: { duration: 1 } }} whileTap={{ scale: 0.3}}>
        <ContainerCard>
            <ImageProject src={imageSrc} alt="image_project"/>
            <SectionTxt>
                <TitleCard 
                    animate={{color: '#000'}}
                >{title}</TitleCard>
                <TxtCard>{technologies}</TxtCard>
            </SectionTxt>
        </ContainerCard>
        </motion.a>
    )
}
const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: auto;
    color: auto;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 15px;
    cursor: pointer;
    color: #D7D7D7;
    gap: 1rem;

`;
const ImageProject = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0;
    aspect-ratio: 1346/619;
    border-radius: 15px 15px 0 0;
`;
const SectionTxt = styled.section`
    display: grid;
    align-content: center;
    width: auto;
    padding: .5rem 0 .7rem .5rem;
`;
const TitleCard = styled.h3`
    
    margin: 0 0 .5rem 0;
    font-size: 1rem;
`;
const TxtCard = styled.p`
    margin: 0;
    font-size: .8rem;
`;