import React from "react";
import SingleItem from "./SingIeItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(title, items);
  // console.log(useLocation());
  const { pathname } = useLocation();
  // console.log(pathname);
  const isHome = pathname === "/";
  let finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2> {title} Populares</h2>

        {isHome ? <Link to={path}>Mostrar tudo</Link> : <></>}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
