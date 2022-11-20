import React from "react";

const Card = props => {
  const { imgSource, className, onClick } = props;
  return (
    <div className={`grid-card ${className}`} onClick={onClick}>
      <img
        className={`img-thumbnail img-fluid grid-img`}
        src={`${process.env.PUBLIC_URL}${imgSource}`}
        alt={'${ process.env.PUBLIC_URL}' + imgSource}
      />
    </div>
  );
};

export default Card;
