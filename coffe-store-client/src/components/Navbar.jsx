import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <ul className="font-bold text-green-600 flex justify-start gap-3">
                <Link to="/"  ><li>
                    Home
                </li></Link>


                <Link to="/addCoffee"  ><li>
                    Add Coffee
                </li></Link>


                <Link to="/updateCoffee"  ><li>
                    Coffee
                </li></Link>
            </ul>

        </div>
    );
};

export default Navbar;