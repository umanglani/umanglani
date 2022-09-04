import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "./app-header.scss";

const AppHeader = () => {
    return <div className="flex-box-start app-header-container v-center">

        <div className="left">
            <FontAwesomeIcon icon={faEnvelope}/>
        </div>
        
        <div className="right flex-box-end v-center">
            <a href="#" className="btn-link">About</a>
            <a href="#" className="btn-link">Services</a>
            <a href="#" className="btn-link">Login</a>
            <button className="btn-rect-white">Get Started</button>
        </div>

    </div>;
}

export default AppHeader;
