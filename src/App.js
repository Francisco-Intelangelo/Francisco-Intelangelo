import { motion } from "framer-motion";
import { Footer } from './components/Footer';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';

function App() {
  return (
      <motion.main 
        style={{display:'grid', gap:'3rem', maxWidth:'1400px'}}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <Profile/>
        <Projects/>
        <ContactMe/>
        <Footer/>
      </motion.main>
  );
}
export default App;