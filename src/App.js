import { motion } from "framer-motion";
import { Footer } from './components/Footer';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';

function App() {
  return (
    <>
        <motion.main style={{display:'grid', gap:'3rem', maxWidth:'1400px'}}>
          <Profile />
          <Projects />
          <ContactMe />
          <Footer />
        </motion.main>
    </>
  );
}
export default App;