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
          <p>Average Score: {Detail.vote_average} /10</p>
          <p>Release Date: {Detail.release_date}</p>
          <p>Movie Overview: </p>
          <p>{Detail.overview} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus perferendis, modi magnam molestias perspiciatis placeat atque dolore, possimus, odio provident nesciunt. Numquam, corporis dolore tempora, magni recusandae illo minima perferendis aspernatur veniam exercitationem ratione rerum voluptatibus itaque illum possimus. Error eveniet repudiandae, amet incidunt beatae mollitia. Praesentium a explicabo consequatur tempora ipsa perspiciatis consequuntur id. Qui laborum dolorum quam mollitia illo neque molestias quod culpa. Fugiat dignissimos corporis nesciunt eos placeat beatae tempore quia minima quis modi? Enim nulla iusto perferendis omnis ex ipsa doloribus, soluta est nisi velit, hic beatae non nobis, at eos laborum debitis atque. Ut, optio.</p>
        </div>
    </div>
  )
}

export default MovieDetail