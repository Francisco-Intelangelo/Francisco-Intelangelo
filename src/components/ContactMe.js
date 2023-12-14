import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export const ContactMe = () => {
    return(
        <ContactConatiner>
            <h2>Email <Icon icon={faEnvelope}/></h2>
            <DivContainer>
                <InputForm value="franciscointelangelo@gmail.com" disabled/>
                <Anchor href="mailto: franciscointelangelo@gmail.com"><Icon icon={faPaperPlane}/></Anchor>
            </DivContainer>
        </ContactConatiner>
    )
    
}
const ContactConatiner = styled.section`
    color: rgba(215, 215, 215, 1);
    width: 100%;
`;
const Icon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
`;
const DivContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
`;
const Anchor = styled.a`
    text-decoration: none;
    color: rgba(215, 215, 215, 1);
    font-size: 1.5rem;
    cursor: pointer;
    background: rgba(62, 99, 149, 1);
    border-radius: .3rem .8rem;
    padding: 5px 10px;
`;
const InputForm = styled.input`
    width: 70%;
    border: none;
    color: rgba(215, 215, 215, 1);
    border-radius: 3rem;
    padding: .7rem;
    font-size: 1rem;
`;
