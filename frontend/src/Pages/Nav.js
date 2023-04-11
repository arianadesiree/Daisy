// import { Link } from "react-router-dom"


export default function Nav() {
    return (
        <nav className="nav">
            <a href="/" className="home-link"> Home </a>
            <ul>
                <li> 
                    <a href="/offices"> Offices </a>
                </li>
                <li> 
                    <a href="/doctors"> Doctors </a>
                </li>
            </ul>
        </nav>


    );
  }