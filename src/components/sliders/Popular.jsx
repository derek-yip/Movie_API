import React, { useState, useEffect } from 'react';
import "../../css/Slider.scss";
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {Link} from "react-router-dom"


function Popular() {
    const [popular,setPopular]= useState([]);

    useEffect(() => {
        getPopular();
      }, []);
    
const getPopular= async()=>{
    const API = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`)
    const data= await API.json();
    setPopular(data.results);
    // console.log(data.results);
};

const ChangeBackground=(e)=>{
  var TargetFrom=e.target.src;
  
  var TargetTo=document.getElementsByClassName("popular_slider_cover");
  console.log(TargetFrom);
  TargetTo[0].style.background=`linear-gradient(180deg, rgba(0,0,0,1) 0%,rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%), url(${TargetFrom}) repeat-x`;
};

  return (
    <div className='popular_slider_cover'>
      <h1 className='center_center'>Popular Movies</h1>
    <div className='popular_slider center_left'>
    <Splide options={{
      perPage: 4,
      perMove: 2,
      arrows: true,
      pagination: true,
      drag: "free",
      gap: "2em",
      rewind:true,
    }} className="Splide">

      {popular.map(movie => {
        return (

          <SplideSlide key={movie.id} >
            <Link style={{textDecoration:'none'}} to={`/movie_detail/${movie.id}`} >
            <div className='card column_center_center'>
              <p>{movie.original_title}</p>
              
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