import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import HomeButton from '../components/HomeButton';
import '../css/Search.scss'
function SearchResult() {
  const params=useParams();
  const [Searcher,setSearcher]=useState([]);

  useEffect(()=>{
  getSearch();
  },[]);

    const getSearch=async()=>{
      const SearchAPI= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=${params.search}&include_adult=false`)
      const SearchData=await SearchAPI.json();
      setSearcher(SearchData.results);
    }

  return (
    <div className='search_result column_center_left'>
      <h1>Search Found : {Searcher.length} result(s)</h1>
        <div className="search_result_cover">
        {Searcher.map(results=>{
          return(
            <div className='result_card' key={results.id}>
              <img src={"https://image.tmdb.org/t/p/w400/" + results.poster_path} alt="" />
              <div>
                <h1>{results.title}</h1>
                <p>Average Score: {results.vote_average} /10</p>
                <p>Release Date: {results.release_date}</p>
                <p>Movie Overview: </p>
                <p>{results.overview} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus perferendis, modi magnam molestias perspiciatis placeat atque dolore, possimus, odio provident nesciunt. Numquam, corporis dolore tempora, magni recusandae illo minima perferendis aspernatur veniam exercitationem ratione rerum voluptatibus itaque illum possimus. Error eveniet repudiandae, amet incidunt beatae mollitia. Praesentium a explicabo consequatur tempora ipsa perspiciatis consequuntur id. Qui laborum dolorum quam mollitia illo neque molestias quod culpa. Fugiat dignissimos corporis nesciunt eos placeat beatae tempore quia minima quis modi? Enim nulla iusto perferendis omnis ex ipsa doloribus, soluta est nisi velit, hic beatae non nobis, at eos laborum debitis atque. Ut, optio.</p>
              </div>
          </div>
          )
        })
        }
          
        </div>
        <div className='bottom_button_cover center_right'>
        <HomeButton className="home_button"/>
        </div>
    </div>
  )
}

export default SearchResult