import { useState } from "react";
import Sun from "../assets/images/icons/sun.svg";
import Logo from "../assets/images/logo.svg";
import Ring from "../assets/images/ring.svg";
import Cart from "../assets/images/shopping-cart.svg";
import CartDetails from "./CartDetails";

const Header =()=>{

    const [cartShow, setCartShow] = useState(false);

    const handleCart =()=>{
        setCartShow(true)
    }

    return (
        <>
            { cartShow && <CartDetails cartModalClose={()=>{setCartShow(false)}}></CartDetails>}
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={Logo} width="139" height="26" alt="Logo" />
                    </a>

                    <ul className="flex items-center space-x-5">
                        <li>
                            <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                                <img src={Ring} width="24" height="24" alt="" />
                            </button>
                        </li>
                        <li>
                            <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                                <img src={Sun} width="24" height="24" alt="" />
                            </button>
                        </li>
                        <li>
                            <button onClick={handleCart} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                                <img src={Cart} width="24" height="24" alt="" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;