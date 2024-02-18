import { useState } from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import MainComponent from "./components/MainComponent";
import MovieContext from "./context";

const App =()=>{

  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{cartData, setCartData}}>
        <Header></Header>
        <MainComponent></MainComponent>
        <Footer></Footer>
      </MovieContext.Provider>
    </>
  )
}
export default App;