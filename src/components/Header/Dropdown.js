import MenuItems from "./MenuItems";

import classes from "./Navbar.module.css";

const Dropdown = ({ submenus, dropdowns }) => {
  return (
    <ul className={`${classes.dropdown} ${dropdowns ? classes.show : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} />
      ))}
    </ul>
  );
};

export default Dropdown;
