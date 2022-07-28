import React, { useState } from "react";

function Planeteer({ name, fromUSA, born, bio, quote, pictureUrl, twitter} ) {

  const [isClicked, setIsClicked] = useState(true)

  const locationRender = () => {
    return (fromUSA ? 'USA-based' : 'Working overseas')
  }

  const handleImageClick = () => {
    console.log('Image Click Happening')
    setIsClicked(!isClicked)
  }

  const textRender = () => {
    return (isClicked ? bio : quote)
  }



  return (
    <li className="cards__item">
      <div className="card">
        <img onClick={handleImageClick}
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          {/* CONDITIONALLY RENDER BIO OR QUOTE UNDER THIS LINE */}
          <p className="card__text">{textRender()}</p>
          <div className="card__detail">
            {/* What about the person who doesn't have a twitter? */}
            <p>{twitter}</p>
            {/* In the p tag below conditionally render whether the person is USA-Based or working overseas */}
            <p>
              {
                locationRender()
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
