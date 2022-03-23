import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <input type="checkbox"/>
      <i className="fas fa-bars"></i>
      <i className="fas fa-times"></i>
      <nav>
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
          <li><a href="#">Item 5</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
