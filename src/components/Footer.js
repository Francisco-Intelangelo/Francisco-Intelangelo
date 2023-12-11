import styled from "styled-components"

export const Footer = () => {
    return(
        <>
            <FooterContainer>
                <p>👋</p>
            </FooterContainer>
        </>
    )
}
const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    height: 2.2em;
    background-color: rgba(24, 24, 27, 1);
    justify-content: center;
    align-items: center;
`;