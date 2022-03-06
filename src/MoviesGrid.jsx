import { useEffect, useState } from 'react';
import { get } from './httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from "./Spinner";

export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true);
        get("/discover/movie").then((data) => {
             setMovies(data.results);
             setIsLoading(false);
        });
    }, []);

    if (isLoading){
        return <Spinner />
    }

    return (
    <ul className={styles.moviesGrid}>
        {movies.map(function(movie){
           return <MovieCard key={movie.id} movie= {movie} />
        })}
    </ul>
    );
}