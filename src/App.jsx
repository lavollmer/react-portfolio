// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
//import Navigation component
import Navigation from "./components/Navigation";
import Header from "./components/Header"
import Project from "./components/Project"
import Footer from "./components/Footer"

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div>
        <Header />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;



