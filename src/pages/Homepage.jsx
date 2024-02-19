import Footer from "../components/Footer";
import Header from "../components/Header";
import MainComponent from "../components/MainComponent";
import Sidebar from "../components/Sidebar";

const Homepage =()=>{
    return (
        <>
            <Header></Header>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar></Sidebar>
                    <div className="content">
                        <h2 className="text-[#ff1313] lg:text-[20px] mb-8 font-bold">New Movies</h2>
                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                            <MainComponent></MainComponent>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
export default Homepage;