import React from 'react';
import plus from "./img/pl.png";
import update from "./img/update.png";
import minus from "./img/minus.png";

function Button() {
  return (
    <div  className="component">
      <div  className="viewer"></div>
      <div className="buttons">
        <button className="plus"><img src={plus} alt="plus"/></button>
        <button className="update"><img src={update} alt="update"/></button>
        <button className="minus"><img src={minus} alt="minus"/></button>
      </div>
    </div>
);

}

export {Button};