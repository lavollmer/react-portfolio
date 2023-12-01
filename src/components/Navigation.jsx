import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <div class="name">
        <p>Laura Vollmer</p>
      </div>
      <div class="options">
        <link>Home</link>
        <link>About Me</link>
        <link>Portfolio</link>
        <link>Contact</link>
        <link>Resume</link>
      </div>
    </nav>
  );
}

export default Navigation;