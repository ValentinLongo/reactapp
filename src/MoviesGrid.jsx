import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css'

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie",{
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGQ4Y2I2MWExZmNkZTJlNmEwYzRlMTEzNGMwMjNiMyIsInN1YiI6IjYyMWZmNzg0ZjcwNmRlMDA2ZDY5MTRjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.neWRxQOCiVcdhU9E_g0CoCHHkDkQGaRBl1nl2NYSIEI",
                "Content-Type": "application/json;charset=utf-8"
            },
        }).then(result => result.json()).then(data => {
             setMovies(data.results);
        });
    }, []);
    return (
    <ul className={styles.moviesGrid}>
        {movies.map(function(movie){
           return <MovieCard key={movie.id} movie= {movie} />
        })}
    </ul>
    );
}