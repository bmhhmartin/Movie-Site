import Sidebar from "../components/Sidebar";
import { getAllMovies } from "../data/Movies";
import MovieCard from "./MovieCard";

const MainComponent = ()=> {

    const movies = getAllMovies();
    console.log(movies);
    

    return (
        <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                
                <Sidebar></Sidebar>

                <div className="content">
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
                        <MovieCard allMovie={movies}></MovieCard>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MainComponent;