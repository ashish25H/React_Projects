import React,{useState} from "react";
import './card.css';

const Card = ({ fetchData }) => {

   

  return (
    <>
      <div className="card">
        <img src={fetchData.data?.articles[0]?.urlToImage} className='img'/>

        <div className="content">
        <p>{fetchData.data?.articles[0]?.title}</p>
        <p>{fetchData.data?.articles[0]?.description}</p>
        <p className="authorName">{fetchData.data?.articles[0]?.author}</p>
        <a className="link" href={fetchData.data?.articles[0]?.url}>Article Link</a>
        </div>
      </div>
    </>
  );
};

export default Card;
