import { Profile } from './components/Profile';
import { AboutMe } from "./components/AboutMe";
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';
import styled from "styled-components";

function App() {
  return (
    <>
        <MainContainer>
          <Profile />
          <AboutMe />
          <Projects />
          <ContactMe />
          <h2 style={{display:'flex', justifyContent:'center', color:'#D7D7D7'}}>In Progress... 👋</h2>
        </MainContainer>
    </>
  );
}
export default App;
const MainContainer = styled.main`
  display:  flex;
  flex-direction: column;
  gap: 3.5rem;
  max-width: 710px;
  padding: 0 20px;
  align-items: center;
`;