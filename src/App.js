
import './App.css';
import Hero from './Components/Hero';
import Skill from './Components/Skill';
import Education from './Components/Education';
import Achievement from './Components/Achievement';
import Certifications from './Components/Certifications';
import Projects from './Components/Projects';
import UseWindowSize from './Components/usewindowsize';
import Header1 from './Components/Header1'

function App() {

  const {width}=UseWindowSize();

  return (
   <>
   <Header1 width={width} />
   <Hero />
   <Skill />
   <Education />
   
   <Achievement />
   <Certifications/>
   <Projects/>
   
   </>
  );

}

export default App;
