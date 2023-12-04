import styled from "styled-components"
import { Projects } from "./Projects";
import { Profile } from "./Profile";
import { ContactMe } from "./ContactMe";

export default function Landing(){
    return(
        <ContainerArticle>
            <ContainerSection>
                <Profile/>
                <ContactMe/>
            </ContainerSection>
            <Projects/>
        </ContainerArticle>
        
    )
}
const ContainerArticle = styled.article`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;
const ContainerSection = styled.section`
`;