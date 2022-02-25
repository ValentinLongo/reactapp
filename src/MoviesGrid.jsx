import { MovieCard } from './MovieCard';
import movies from './movies.json'

export function MoviesGrid(){
    return (
    <ul>
        {movies.map(function(movie){
           return <MovieCard key={movie.id} movie= {movie} />
        })}
    </ul>
    );
}