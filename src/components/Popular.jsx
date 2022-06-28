import React, { useState } from 'react';
import{useEffect} from 'react';
import "../css/Moive.scss";
// import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Popular() {
    const [popular,setPopular]= useState([]);

    useEffect(() => {
        getPopular();
      }, []);
    
const getPopular= async()=>{
    const API = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOIVE_API}&language=en-US&page=1`)
    const data= await API.json();
    setPopular(data.results);
    console.log(data.results);
};

  return (
    <div className='popular_slider'><h1>Popular Moives</h1>
    <Splide options={{
      perPage: 5,
      perMove: 2,
      arrows: true,
      pagination: true,
      drag: "free",
      gap: "2em"
    }} >

      {popular.map(moive => {
        return (

          <SplideSlide>
            <div className='card'>
              <p>{moive.original_title}</p>
              <img src={"https://image.tmdb.org/t/p/w400/" + moive.poster_path} alt="" />
            </div>
          </SplideSlide>

        );
      })}

    </Splide></div>

    

    
  )
}

export default Popular;