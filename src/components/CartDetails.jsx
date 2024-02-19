import { useContext } from "react";
import Delete from "../assets/images/delete.svg";
import Checkout from "../assets/images/icons/checkout.svg";
import { getImage } from "../assets/utils/getImage";
import MovieContext from "../context";

const CartDetails =({cartModalClose})=>{

    const {cartData, setCartData} = useContext(MovieContext);

    const handleDeleteCart=(e, itemID)=>{
        e.preventDefault();

        const filterItem = cartData.filter((item)=>{
            return item.id !== itemID;
        })

        setCartData([...filterItem])
    }
    

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
                    <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">Your Carts</h2>
                    { cartData.length == 0 && <h1 className="text-center text-red-600 lg:text-[20px] mb-8 font-bold">No Cart Data Found</h1> }
                    
                    {cartData.map((item)=>(
                        <div key={item.id} className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
                        <div className="grid grid-cols-[1fr_auto] gap-4">
                            <div className="flex items-center gap-4">
                                <img
                                    className="rounded overflow-hidden w-10"
                                    src={getImage(item.cover)}
                                    alt={item.title}
                                    />
                                <div>
                                    <h3 className="text-base md:text-xl font-bold">{item.title}</h3>
                                    <p className="max-md:text-xs text-[#575A6E]">
                                        {item.genre}
                                    </p>
                                    <span className="max-md:text-xs">${item.price}</span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 items-center">
                                <button onClick={(e)=>handleDeleteCart(e, item.id)} className="bg-[#ff3c3c] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white">
                                    <img className="w-5 h-5" src={Delete} alt="Delete Icon" />
                                    <span className="max-md:hidden">Remove</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}


                    {/* submit part */}
                    <div className="flex items-center justify-end gap-2">
                        <button className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary/50 text-[#171923] text-sm" disabled={cartData.length > 0 ? '' : 'disabled'}>
                            <img src={Checkout} width="24" height="24" alt=""/>
                            <span>Checkout</span>
                        </button>
                        <button onClick={cartModalClose} className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartDetails;