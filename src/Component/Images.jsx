import React from 'react'
import './Search.css';

const Images = (props) => {
  const img = `https://source.unsplash.com/random/500x400/?${props.name}/`;

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <>
      <img className="image" src={img} alt="Image Not Found" />
    </>
  );
};

export default Images
