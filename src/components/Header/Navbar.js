import { menuItemsData } from "../../menuItemsData";
import MenuItems from "./MenuItems";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes["desktop-nav"]}>
      <ul className={classes.menus}>
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
