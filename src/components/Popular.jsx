import React, { useState } from 'react';
import{useEffect} from 'react';
import "../css/Moive.scss";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
    <div className='moive_bar'>
        {popular.map(moive=>{
            return(
                <div className='card'>
                        <p>{moive.original_title}</p>
                    <img src={"https://image.tmdb.org/t/p/w300/"+moive.poster_path} alt={moive.original_title}/>
                </div>
            )
        })}

    </div>
  )
}

export default Popular;