import ComingSoon from "../assets/images/icons/commingSoon.svg";
import Favourite from "../assets/images/icons/favourite.svg";
import NewRelease from "../assets/images/icons/newRelease.svg";
import Trending from "../assets/images/icons/trending.svg";
import WatchLater from "../assets/images/icons/watchLater.svg";

const Sidebar =()=>{
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary hover:text-white" href="/">
                        <img src={Trending} width="24" height="24" alt="icon" />
                        <span>New Movies</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary hover:text-white" href="#">
                        <img src={NewRelease} width="24" height="24" alt="icon" />
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary hover:text-white" href="#">
                        <img src={ComingSoon} width="24" height="24" alt="icon" />
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary hover:text-white" href="/favourite">
                        <img src={Favourite} width="24" height="24" alt="icon" />
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary hover:text-white" href="#">
                        <img src={WatchLater} width="24" height="24" alt="icon" />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar;