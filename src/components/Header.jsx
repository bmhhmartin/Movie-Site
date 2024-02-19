import { useContext, useState } from "react";
import Sun from "../assets/images/icons/sun.svg";
import Ring from "../assets/images/ring.svg";
import Cart from "../assets/images/shopping-cart.svg";
import MovieContext from "../context";
import CartDetails from "./CartDetails";

const Header =()=>{

    const [cartShow, setCartShow] = useState(false);
    const {cartData} = useContext(MovieContext);

    const handleCart =()=>{
        setCartShow(true)
    }
    

    return (
        <>
            { cartShow && <CartDetails cartModalClose={()=>{setCartShow(false)}}></CartDetails>}
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="/">
                        <h2 className="text-center text-[#1e73ff] lg:text-[20px] mb-8 font-bold">MovieSite</h2>
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <button className="bg-primary/70 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                                <img src={Ring} width="24" height="24" alt="" />
                            </button>
                        </li>
                        <li>
                            <button className="bg-primary/70 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                                <img src={Sun} width="24" height="24" alt="" />
                            </button>
                        </li>
                        <li className="relative">
                            <button onClick={handleCart} className="bg-primary/70 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                                <img src={Cart} width="24" height="24" alt="" />
                            </button>
                            {
                                cartData.length > 0 && (
                                    <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#ff1313] text-white text-center p-[2px] w-[30px] h-[30px]">{cartData.length}</span>
                                )
                            }
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;