import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import styled from 'styled-components';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
        <Navbar/>
      <SectionApp>
        <Landing/>
      </SectionApp>
      <Footer/>
    </>
  );
}
library.add(faEnvelope, faGithub, faLinkedin, faMedium, faStackOverflow)
export default App;

const SectionApp = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #2a4365;
  height: 90vh;
`;