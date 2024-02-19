

import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './Route/AppRoute';
import MovieContext from "./context";


const App = () => {
    const [cartData, setCartData] = useState([]);
  return (
    <div>
      <MovieContext.Provider value={{cartData, setCartData}}>
        <Router>
          <AppRoute></AppRoute>
        </Router>
      </MovieContext.Provider>
    </div>
  );
};

export default App;