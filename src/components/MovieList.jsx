import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { BsPlusSquareDotted } from 'react-icons/bs'

export default function MovieList(props) {
    const {movielist, ChangeMovies, PickMovie, ChosenOne} = props
    const [ShowForm, setShowForm] = useState(false);

    function addMovie(movie){
        ChangeMovies([...movielist, movie])
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let mv = {
            "title": e.target.name.value,
            "rating": e.target.stars.value,
            "plot": e.target.desc.value,
            "posterUrl": e.target.poster.value,
            "id": movielist.length+1
        }
        addMovie(mv)
        setShowForm(false)
    }


    const handleClick = () =>{
        console.log(ShowForm)
        setShowForm(!ShowForm)
    }

    useEffect(() => {

    }, [movielist]);
  return (
    <div>
    <div className='card-list'>
    {movielist.map(mv => {
        return(
            <MovieCard key={mv.id} dataKey={mv.id} title={mv.title} description={mv.plot} rating={mv.rating} poster={mv.posterUrl} trailer={mv.trailer} PickMovie={PickMovie}/>
        )
    })}
    <div className='movie-card' onClick={handleClick} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <BsPlusSquareDotted style={{height:"60px", width:"60px"}}  />
    </div>
    
    </div>
{ShowForm ? 
    <form onSubmit={handleSubmit} style={{height:"400px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",rowGap:"20px"}}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="desc">Description</label>
        <input type="text" name="description" id="desc"/>
        <label htmlFor="stars">Rating</label>
        <input type="text" name="ratings" id="stars"/>
        <label htmlFor="poser">Poster</label>
        <input type="text" name="poster" id="poster"/>
        <button >Add Movie</button>
    </form>
    : ''}
    </div>
  )
}
