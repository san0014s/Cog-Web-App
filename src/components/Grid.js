import React from "react";

import Card from "./Card";

const Grid = props => {
  const {
    list,
    visibleItems,
    setVisibleItems,
    finishedItems,
    checkItems
  } = props;

  return (
    <div className="container">
      <div className="row no-gutters">
        {list.map((index) => (
          <Card
            key={index[0]}
            className={`col-1 card ${
              visibleItems.includes(index) ? "grid-card-show" : ""
            } ${
              finishedItems.includes(index)
                ? "grid-card-show grid-card-finished"
                : ""
            }`}
            onClick={() => {
              if (!finishedItems.includes(index)) {
                switch (visibleItems.length) {
                  case 0:
                    setVisibleItems([index]);
                    break;
                  case 1:
                    if (visibleItems[0] !== index) {
                      setVisibleItems(visibleItems.concat([index]));
                      checkItems(visibleItems[0], index);
                    }
                    break;
                  case 2:
                    setVisibleItems([index]);
                    break;
                  default:
                    setVisibleItems([]);
                }
              }
            }}
            imgSource={index[1]}
          />
        ))}
      </div>
    </div>
  );
};

Grid.defaultProps = {
  list: []
};

export default Grid;
