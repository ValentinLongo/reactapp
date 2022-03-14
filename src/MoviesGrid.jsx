import { useEffect, useState } from 'react';
import { get } from './httpClient';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { Spinner } from "./Spinner";
import { useQuery } from './useQuery';
import InfiniteScroll from 'react-infinite-scroll-component';




export function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)
    
    const query = useQuery();
    const search = query.get("search");
    
    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
        ? "/search/movie?query=" + search + "&page" + page
        : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
             setMovies((prevMovies) => prevMovies.concat(data.results));
             setHasMore(data.page <data.total_pages);
             setIsLoading(false);
        });
    }, [search, page]);

    

    return (
    <InfiniteScroll dataLength={movies.length} hasMore={true} 
    next={() => setPage((prevPage) => prevPage + 1)} loader={<Spinner/>}>
    <ul className={styles.moviesGrid}>
        {movies.map(function(movie){
           return <MovieCard key={movie.id} movie= {movie} />
        })}
    </ul>
    </InfiniteScroll>
    );
}