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
    height: auto;
    background-color: #18181b;
    justify-content: center;
    align-items: center;
`;