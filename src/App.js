
import Nav from './Nav.js'
import Register from './NavComponents/Register.js';
import Contact from './NavComponents/Contact.js';
import Program from './NavComponents/Program.js';
import About from './NavComponents/About.js';
import { GlobalStateProvider } from './UseContextComponents/GlobalStateProvider.js';

function App() {
  return (
   <GlobalStateProvider>
     <Nav/>
    <Program/>
    <About/>
    <Contact/>
    <Register/>
   </GlobalStateProvider>
  );
}

export default App;
