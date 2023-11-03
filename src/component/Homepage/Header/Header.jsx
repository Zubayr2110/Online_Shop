/* import img  */
import logo from "/src/assets/logo.svg";
import savesvg from "/src/assets/Frame 211.svg";
import menusvg from "/src/assets/menu.svg";

/* import img  end */

import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div className="nav_list">
          <Link to="/main">
            <img src={logo} alt="img" className="nav_list-logo" />
          </Link>
          <div className="nav_list-item">
            <button className="nav_list-item-button">
              <img src={menusvg} alt="img" />
              Каталог
            </button>
            <form className="formc">
              <input type="search" id="srchinp" placeholder="Найти товар" />
              <img src="/src/assets/search.svg" alt="img" className="srchbtn" />
            </form>
          </div>
        </div>
        <div className="nav_list1">
          <Link to="/save">
            <div className="nav_list1-menu">
              <img src={savesvg} alt="" />
              <p className="nav_list1-menu-text">Избранное</p>
            </div>
          </Link>
          <Link to="/product">
            <div className="nav_list1-menu1">
              <img src="/src/assets/Frame 211 (1).svg" alt="" />
              <p className="nav_list1-menu-text">продукты</p>
            </div>
          </Link>
          <Link to="/korzinka">
            <div className="nav_list1-menu2">
              <img src="/src/assets/shopping-cart.svg" alt="" />
              <p className="nav_list1-menu-text">Корзина</p>
            </div>
          </Link>
          <Link to="/">
            <div className="nav_list1-usermenu">
              <img src="/src/assets/avatar.svg" alt="img" class="avatarimg" />
              <p className="nav_list1-usermenu-text">Name</p>
              <img
                src="/src/assets/chevron-down.svg"
                alt="img"
                className="chevron"
              />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
