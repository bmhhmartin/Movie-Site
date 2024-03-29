import { useContext, useState } from "react";
import Tag from "../assets/images/tag.svg";
import { getImage } from "../assets/utils/getImage";
import MovieContext from "../context";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";



const MovieCard =({allMovie})=>{

    const [modalShow, setModalShow] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const {cartData, setCartData} = useContext(MovieContext); 

    const handleModalOpen = (movie) => {
        setSelectedMovie(movie);
        setModalShow(true);
    }

    const handleModalOpenClose = () => {
        setModalShow(false);
    }

    const handleAddToCart =(e, movie)=>{
        e.stopPropagation();
        const found = cartData.find((item)=>{
            return item.id === movie.id;
        })

        if(!found){
            setCartData([...cartData, movie]);
        }else{
            alert("This movie is already added !")
        }
    }

    return (
        <>
            { modalShow && <MovieDetailsModal onCart={handleAddToCart} movie ={selectedMovie} onModalClose={handleModalOpenClose}></MovieDetailsModal> }
            {
                allMovie.map((movie)=>(
                    <button onClick={()=>{handleModalOpen(movie)}} key={movie.id}>
                        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                            <img className="w-full object-cover" src={getImage(movie.cover)} alt={movie.title} />
                            <figcaption className="pt-4">
                                <h3 className="text-xl mb-1">{movie.title}</h3>
                                <div className="flex items-center space-x-1 mb-5">
                                    <Rating starValue={movie.rating}></Rating>
                                </div>
                                <button onClick={(e)=>{handleAddToCart(e, movie)}} className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#ffffff] font-semibold text-sm ">
                                    <img src={Tag} alt="tag" />
                                    <span>{movie.price} | Add to Cart</span>
                                </button>
                            </figcaption>
                        </figure>
                    </button>
                ))
            }
        </>
    )
}
export default MovieCard;