import React from 'react'
import { Route, Link } from 'react-router-dom'
import MovieList from './MovieList'
export default function TrailerPage(props) {
  const { movielist, MovieIndex, ResetIndex, navigate } = props

  return (
    <div style={{display:"flex", alignItems:"center", flexDirection:"column", height:"100vh"}}>
        <h1>{movielist[MovieIndex].title}</h1>
        <iframe width="560" height="315" src={movielist[MovieIndex].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>{movielist[MovieIndex].plot}</p>
        <button onClick={() => {ResetIndex(-1); navigate("/")}}>Return to Movie Menu</button>
    </div>
  )
}
