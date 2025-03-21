import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import cards__data from '../../assets/cards/Cards_data'
import axios from 'axios'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])

  const cardsRef =useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmJiNjlkYWJmMmYxNTQ4ZGE3MWFkZjQ5NGRlMjVhMiIsIm5iZiI6MTc0MjU4NTA2NC45MDYsInN1YiI6IjY3ZGRiY2U4MDUxY2JhOTA2NmY1NjRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oyAsQcXmbm9BoxH4RYdKZzfKfDbbOcAY_aYJe8dhDiM'
    }
  };
  



  
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(() => {

  //   fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  // .then(res => res.json())
  // .then(res => console.log(res))
  // .catch(err => console.error(err)); //The Recommended way which made the whole screen turn black and console errors of .map not defined
    
    async function fetchMovies() { //an attempt to make it work
      const { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      console.log(data.results)
      const apiRes = data.results
    }
  fetchMovies(),
  cardsRef.current.addEventListener('wheel', handleWheel)
},[]) 
  return (
    <div className='title__cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card__list" ref={cardsRef}>
        {apiData.map((card, index) => { //Issues as soon as I switch from cards__data to apiData
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards