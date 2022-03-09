import styles from "./Search.module.css"
import {BiCameraMovie} from "react-icons/bi"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from './useQuery';

export function Search(){
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const history = useNavigate()

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history("/?search=" + searchText);
    }
    return( // onSubmit solo porque esta dentro de form, si no podria ser onClick en button como js
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput}
                    type="text" 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}/>
                <button className={styles.searchButton} type="submit">
                    <BiCameraMovie size={17}/>
                </button>
            </div>
        </form>
    )
}