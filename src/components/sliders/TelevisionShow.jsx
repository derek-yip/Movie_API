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
    // console.log(data.results);
};

  return (
    <div className='slider_cover'>
      <h1 className='center_center'>Televsion Show</h1>
    <div className='television_slider center_left'>
    <Splide options={{
      perPage: 5,
      perMove: 5,
      arrows: true,
      pagination: true,
      drag: "free",
      gap: "2em",
      rewind:true,
    }} >

      {TV.map(tv => {
        return (

          <SplideSlide key={tv.id}>
            <Link  style={{textDecoration:'none'}} to={`/tv_detail/${tv.id}`}>
            <div className='tv_card column_center_center'>
              <p>{tv.original_name}</p>
              
              <img src={"https://image.tmdb.org/t/p/w400/" + tv.poster_path} alt="" />
            
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