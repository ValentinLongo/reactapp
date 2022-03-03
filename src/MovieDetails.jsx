import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css"

export function MovieDetails(){
    const{ movieId } = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie/" + movieId,{
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGQ4Y2I2MWExZmNkZTJlNmEwYzRlMTEzNGMwMjNiMyIsInN1YiI6IjYyMWZmNzg0ZjcwNmRlMDA2ZDY5MTRjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.neWRxQOCiVcdhU9E_g0CoCHHkDkQGaRBl1nl2NYSIEI",
                "Content-Type": "application/json;charset=utf-8"
            },
        }).then(result => result.json()).then((data) => {
             setMovie(data.results);
        });
    }, [movieId]);

    if (!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
        <div className={styles.detailsContainer}>
            <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title} />
            <div className={styles.col + " " + styles.movieDetails}>
                <p className={styles.firstItem}><strong>Titulo: </strong> {movie.title}</p>
                <p><strong>Generos: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Descripción: </strong> {movie.overview}</p>
            </div>
        </div>
    );
}