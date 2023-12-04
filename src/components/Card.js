import styled from "styled-components"

export const Card = ({title, description, imageSrc}) => {
    return(
        <ContainerCard>
            <ImageProject src={imageSrc} alt="image_project"/>
            <TitelCard>{title}</TitelCard>
            <TextCard>{description}</TextCard>
        </ContainerCard>
    )
}
const ContainerCard = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    background-color: #436DA5;
    margin: 10px 0; 
    border-radius: 0px;

`;
const ImageProject = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0px 0px 0 0;
`;
const TitelCard = styled.h3`
    font-size: 1.1em;
    padding-left: 6px;
`;
const TextCard = styled.p`
    font-size: .8em;
    width: 276px;
    padding-left: 6px;
`;