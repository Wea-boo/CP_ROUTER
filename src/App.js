import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TrailerPage from './components/TrailerPage';

function App() {
  const navigate = useNavigate();
  const [SelectedMovie, setSelectedMovie] = useState(-1);
  const [Movies, setMovies] = useState([
    {
        "id": 1,
        "title": "Beetlejuice",
        "rating": 5.5,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
    },
    {
        "id": 2,
        "title": "The Cotton Club",
        "rating": 3.9,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
    },
    {
        "id": 3,
        "title": "The Shawshank Redemption",
        "rating": 8.7,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
    },
    {
        "id": 4,
        "title": "Crocodile Dundee",
        "rating": 8.5,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    },
    {
        "id": 5,
        "title": "Valkyrie",
        "rating": 6.8,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
        "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"
    },
    {
        "id": 6,
        "title": "Ratatouille",
        "rating": 10,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
    },
    {
        "id": 7,
        "title": "City of God",
        "rating": 9,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
    },
    {
        "id": 8,
        "title": "Memento",
        "rating": 2.4,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "id": 9,
        "title": "The Intouchables",
        "rating": 8.8,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
        "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"
    },
    {
        "id": 10,
        "title": "Stardust",
        "rating": 4,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
    },
    {
        "id": 11,
        "title": "Apocalypto",
        "rating": 6.5,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
    },
    {
        "id": 12,
        "title": "Taxi Driver",
        "rating": 6.2,
        "trailer": "https://www.youtube.com/embed/8KB3DHI-QbM",
        "plot": "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }]);
    
    useEffect(() => {
        if(SelectedMovie != -1){
            navigate(`/Movie/${Movies[SelectedMovie-1].title.toLowerCase().replace(' ','-')}`)
        }
    }, [SelectedMovie]);

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<MovieList movielist={Movies} ChangeMovies={setMovies} PickMovie={setSelectedMovie} ChosenOne={SelectedMovie}/>}/>
      <Route path='/Movie/:title' element={<TrailerPage movielist={Movies} MovieIndex={SelectedMovie-1} ResetIndex={setSelectedMovie} navigate={navigate}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
