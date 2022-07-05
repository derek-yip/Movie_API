import React, { useState, useEffect } from 'react';
import "../../css/Slider.scss";
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {Link} from "react-router-dom"


function TelevisionShow() {
    const [TV,setTV]= useState([]);

    useEffect(() => {
        getTV();
      }, []);
    
const getTV= async()=>{
    const API = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`)
    const data= await API.json();
    setTV(data.results);
};

const ChangeBackground=(e)=>{
  var TargetFrom=e.target.src;
  
  var TargetTo=document.getElementsByClassName("television_slider_cover");
  TargetTo[0].style.background=`linear-gradient(180deg, rgba(0,0,0,1) 0%,rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%), url(${TargetFrom}) repeat-x`;
};

  return (
    <div className='television_slider_cover'>
      <h1 className='center_center'>Televsion Show</h1>
    <div className='television_slider center_left'>
    <Splide options={{
      breakpoints: {
        640: {
          perPage: 1,
          perMove:1,
          gap:"0em",
        },
        1024: {
          perPage: 3,
          perMove:3,
          gap:".5em",
        },
        1440: {
          perPage: 5,
          perMove:5,
          gap:"2em",
        },
      },
      arrows: true,
      pagination: true,
      drag: "free",
      rewind:true,
    }} >

      {TV.map(tv => {
        return (

          <SplideSlide key={tv.id}>
            <Link  style={{textDecoration:'none'}} to={`/tv_detail/${tv.id}`}>
            <div className='tv_card column_center_center'>
              <p>{tv.original_name}</p>
              
              <img onMouseOver={ChangeBackground} src={"https://image.tmdb.org/t/p/w400/" + tv.poster_path} alt="" />
            
            </div>
            </Link>
          </SplideSlide>

        );
      })}

    </Splide></div>
    </div>

    

    
  )
}

export default TelevisionShow;