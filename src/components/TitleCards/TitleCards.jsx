import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import cards__data from '../../assets/cards/Cards_data'
import axios from 'axios'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category, catpage}) => {

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

    async function fetchMovies() { //an attempt to make it work
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=${catpage?catpage:"1"}`, options)
      // console.log(data.results)
      setApiData(data.results)
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
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards