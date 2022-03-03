import { useEffect, useState } from 'react';
import { get } from './httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css'

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        get("/discover/movie").then((data) => {
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