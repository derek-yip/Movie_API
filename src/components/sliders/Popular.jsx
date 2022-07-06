import React, { useState, useEffect } from 'react';
import "../../css/Slider.scss";
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {Link} from "react-router-dom"


function Popular() {
  
  const [popular,setPopular]= useState([]);

  const getPopular= async()=>{
      const API = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`)
      const data= await API.json();
      setPopular(data.results);
  };

  useEffect(() => {
          getPopular();
        }, []);

  const ChangeBackground=(e)=>{
    var TargetFrom=e.target.src;
    
    var TargetTo=document.getElementsByClassName("popular_slider_cover");
    TargetTo[0].style.background=`linear-gradient(180deg, rgba(0,0,0,1) 0%,rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%), url(${TargetFrom}) repeat-x`;
  };

  return (
    <div className='popular_slider_cover'>
      <h1 className='center_center'>Popular Movies</h1>
    <div className='popular_slider center_left'>
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
          gap:"1em",
        },
        1920: {
          perPage: 4,
          perMove:4,
          gap:"2em",
        },
      },
      arrows: true,
      pagination: true,
      drag: "free",
      rewind:true,
    }} className="Splide">

      {popular.map(movie => {
        return (

          <SplideSlide key={movie.id} >
            <Link style={{textDecoration:'none'}} to={`/movie_detail/${movie.id}`} >
            <div className='card column_center_center'>
              <p className='bottom_center'>{movie.original_title}</p>
              
              <img src={"https://image.tmdb.org/t/p/w400" + movie.poster_path} alt="" onMouseOver={ChangeBackground}/>
            
            </div>
            </Link>
          </SplideSlide>

        );
      })}

    </Splide></div>
    </div>

    

    
  )
}

export default Popular;