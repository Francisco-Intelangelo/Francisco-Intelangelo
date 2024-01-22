import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"

export const AboutMe = () => {
   return(
      <>
         <TitleAbout>About Me <Icon icon={faUser}/></TitleAbout>
         <TxtAbout>
            Actualmente estudiando en Coursera la certificación oficial de Meta Front-End    Developer.<br/>
            Comencé a interesarme en el desarrollo web del lado front-end durante el cursado de la tecnicatura en programación, en puestos anteriores se me ha reconocido por mi compromiso con la empresa, la autogestión, el desempeño y trabajo en equipo.
         </TxtAbout>
      </>
   )
}
const TitleAbout = styled.h2`
   color: rgba(215, 215, 215, 1);
`;
const Icon = styled(FontAwesomeIcon)`
   font-size: 1.5rem;
   padding-left: 1rem;
`;
const TxtAbout = styled.p`
   margin: 0;
   color: rgba(215, 215, 215, 1);
   font-size: 1.1rem;
`;