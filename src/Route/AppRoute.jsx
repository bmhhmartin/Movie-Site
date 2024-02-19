import { Route, Routes } from 'react-router-dom';
import FavouritePage from '../pages/FavouritePage';
import HomePage from "../pages/Homepage";

const AppRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/favourite' element={<FavouritePage/>}></Route>
            </Routes>
            
        </div>
    );
};

export default AppRoute;