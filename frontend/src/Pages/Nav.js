import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Home from "./Home";



export default function Nav() {

    return (
        <div class="bg-neutral-500 px-28 py-5">
        <nav class="flex items-center">
        <img class="w-60" src={logo}/>
        <ul class="flex-1 text-right text-xl font-serif">
                <li class="text-white list-none inline-block px-5">
                     <Link to="/"> Home </Link>
                </li>

                <li class="text-white list-none inline-block px-5"> 
                    <Link to="/offices"> Offices </Link>
                </li>

                <li class="text-white list-none inline-block px-5"> 
                    <Link to="/doctors"> Doctors </Link>
                </li>
            </ul>
        </nav>
    </div>

    );
  }