import React, { useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function MovieDetail() {
  
  const param=useParams();
  const [Detail,setDetail]=useState([]);
  
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail= async()=>{
    const API = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${process.env.REACT_APP_MOVIE_API}`);
    const data= await API.json();
    setDetail(data);
};

  return (
    <div className='detail_cover'>
        <img src={"https://image.tmdb.org/t/p/w400/" + Detail.poster_path} alt="" />
        <div className="detail_right">
          <h1>{Detail.title}</h1>
          <p>{Detail.vote_average}</p>
          <p>{Detail.release_date}</p>
          <p>{Detail.overview}</p>
        </div>
    </div>
  )
}

export default MovieDetail