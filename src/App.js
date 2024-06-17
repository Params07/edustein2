
import Nav from './Nav.js'
import Register from './NavComponents/Register.js';
import Contact from './NavComponents/Contact.js';
import Program from './NavComponents/Program.js';
import About from './NavComponents/About.js';
import { GlobalStateProvider } from './UseContextComponents/GlobalStateProvider.js';
import Home from './NavComponents/Home.js';

function App() {
  return (
   <GlobalStateProvider>
     <Nav/>
     <Home/>
    <Program/>
    <About/>
    <Contact/>
    <Register/>
   </GlobalStateProvider>
  );
}

export default App;
