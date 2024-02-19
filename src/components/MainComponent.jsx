import { getAllMovies } from "../data/Movies";
import MovieCard from "./MovieCard";

const MainComponent = ()=> {

    const movies = getAllMovies();
    

    return (
        <>
            <MovieCard allMovie={movies}></MovieCard>
        </>
    )
}
export default MainComponent;