import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const FavouritePage =()=>{
    return (
        <>
            <Header></Header>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar></Sidebar>
                    <div className="content">
                        <h2 className="text-[#ff1313] lg:text-[20px] mb-8 font-bold">Favourite Movies</h2>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
export default FavouritePage;