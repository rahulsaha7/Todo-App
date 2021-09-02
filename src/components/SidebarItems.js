
import {
    Link
} from "react-router-dom";

export const SidebarItems = (props) => {
    return (
        
        <li className="py-2 ps-3 mt-1">
                                <i class="fab fa-black-tie"></i>
                                <Link to={props.navlinks.link} className="Call-history">{props.navlinks.name}</Link>
                                
        </li>
    )
}
