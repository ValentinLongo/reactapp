import { MoviesGrid } from "./MoviesGrid";
import { Search } from "./Search";
import { useQuery } from "./useQuery";

export function LandingPage(){
        const query = useQuery();
    const search = query.get("search");
    return (
        <div>
            <Search/>
            <MoviesGrid key={search} />
        </div>
    );
}