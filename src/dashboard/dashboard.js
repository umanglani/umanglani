import AppHeader from "../common/components/app-header";
import GetStarted from "../common/components/get-started/get-started";
import Scheduler from "./calendar/calendar";
import "./dashboard.scss";
import Overview from "./overview/overview";

const Dashboard = () => {
    return <div className="full-width">
        <AppHeader/>
        <GetStarted/>

        <div className="body-container flex-box-start">

            {/* overview section */}
            <div className="overview">
                <Overview></Overview>
            </div>

            {/* calendar section */}
            <div className="calendar">
                <Scheduler/>
            </div>

        </div>
    </div>
};

export default Dashboard;