import { Link } from "react-router-dom"


export default function Nav() {

    return (
        <nav className="nav">
            <Link to="/" className="home-link"> Home </Link>
            <ul>
                <li> 
                    <Link to="/offices"> Offices </Link>
                </li>
                <li> 
                    <Link to="/doctors"> Doctors </Link>
                </li>
            </ul>
        </nav>


    );
  }