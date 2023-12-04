import styled from "styled-components";
import avatar from "./images/avatar.jpg"

export const Profile = () => {
    return(
        <ContainerProfile>
            <ProfilePhoto src={avatar} alt="avatar"/>
            <TitleLanding>Francisco Intelangelo</TitleLanding>
            <TxtLanding>Front-end Developer</TxtLanding>
        </ContainerProfile>
    )
}
const ContainerProfile = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    margin-right: 150px;
`;
const ProfilePhoto = styled.img`
    width: 10em;
    height: auto;
    border-radius: 50%;
`;
const TitleLanding = styled.h1`
    color: #d7d7d7;
    margin: 5px 0;
    font-size: 1.4em;
`;
const TxtLanding = styled.p`
    color: #d7d7d7;
`;