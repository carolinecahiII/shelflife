import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Styles/Menu.css';

function Menu() {
  return (
    <header className="App-header">
      <nav className="menu">
        <a href="#trailer">Trailer</a>  
        <a href="#about">About</a> 
        <a href="#development">Development</a>  
        <a href="#team">Team</a>  
        <a href="https://docs.google.com/document/d/1poKJoSygq0PO9xNlSdAxIgT8oGGPkygsNxE0tejvxiI/edit?usp=sharing">Donate</a>  
        <a href="#contact">Contact</a>  
      </nav>

      <div className='mark'>     
        <a href="https://librarytechnology.org/libraries/">Libraries Near You</a>  
      </div>
    </header>
  );
}

export default Menu;
