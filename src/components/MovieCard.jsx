import React from 'react'
import StarRatings from 'react-star-ratings'
import { Link, Route } from 'react-router-dom'


export default function MovieCard(props) {
    const { dataKey, title, description, rating, poster, trailer, PickMovie } = props

  return (
    <div className='movie-card'>
        <img src={poster} alt="Poster Currently Unavailable" style={{height:"70%", width:"auto"}}/>
        <h1>{title}</h1>
        <StarRatings rating={rating/2} starRatedColor="yellow" numberOfStars={5} starDimension="20px"/>
        <button onClick={() => PickMovie(dataKey)}>Click for details</button>
    </div>
  )
}
