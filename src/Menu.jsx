import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import header from "./assets/header.png";

function Menu() {
    return (
        <>
            <header>
                <nav>
                    <Link className="menu" to="/">КОМПАНИЯ</Link>
                    <Link className="menu" to="/product">ПРОДУКЦИЯ</Link>
                    <Link className="menu" to="/about">О НАС</Link>
                    <a href="/"><img src={logo} alt="logo"/></a>
                    <Link className="menu" to="/news">НОВОСТИ</Link>
                    <Link className="menu" to="/dostij"> ДОСТИЖЕНИЯ</Link>
                    <Link className="menu" to="">КОНТАКТЫ</Link>
                </nav>
            </header>
        </>
    );
}

export default Menu;
