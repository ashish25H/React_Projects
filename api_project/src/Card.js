import React from "react";
import './card.css';

const Card = ({ fetchData , index}) => {

   

  return (
    <>
      <div className="card">
        <img src={fetchData.data?.articles[index]?.urlToImage} className='img'/>

        <div className="content">
        <p>{fetchData.data?.articles[index]?.title}</p>
        <p>{fetchData.data?.articles[index]?.description}</p>
        <p className="authorName">{fetchData.data?.articles[index]?.author}</p>
        <a className="link" href={fetchData.data?.articles[index]?.url}>Article Link</a>
        </div>
      </div>
    </>
  );
};

export default Card;
