import { Link, useLocation } from "react-router-dom";
import CreateDoctor from "./CreateDoctor";

export default function Nav() {
    const location = useLocation();

    return (
        <div class="bg-neutral-500 px-28 py-5">
        <nav class="flex items-center">
        <ul class="flex-1 text-right text-xl font-serif">
                <li class="text-white hover:text-pink-300 list-none inline-block px-5">
                     <Link to="/"> Home </Link>
                </li>

                <li class="text-white  hover:text-pink-300 list-none inline-block px-5"> 
                    <Link to="/offices"> Offices </Link>
                </li>

                <li class="text-white  hover:text-pink-300 list-none inline-block px-5"> 
                    <Link to="/doctors"> Doctors </Link>
                </li>

                <li class="text-white hover:text-pink-300 list-none inline-block px-5">
                     <Link to="/createdoctor"> Add A Doctor </Link>
                </li>
            </ul>
        </nav>
        {location.pathname === "/createdoctor"}
    </div>

    );
  }