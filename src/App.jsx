// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
//import Navigation component
import Navigation from "./components/Navigation";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div>
        <Navigation />
      </div>
    </>
  );
}

export default App;



