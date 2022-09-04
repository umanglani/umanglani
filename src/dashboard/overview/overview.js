import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Tabs from "../../common/components/tabs/tabs";
import "./overview.scss";
import { faHandHoldingDollar, faSearch, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCcVisa } from "@fortawesome/free-brands-svg-icons";

const overviewTabs = [
    {key: 'overview', title: 'Overview', active: true},
    {key: 'reports', title: 'Reports', active: false},
];

const sectionTabs = [
    {key: 'booking', title: 'Booking', active: true},
    {key: 'customization', title: 'Customization', active: false},
    {key: 'balances', title: 'Balances', active: false},
];

const todayEarning = 9255.25.toLocaleString(undefined, {maximumFractionDigits: 2});
const currDate = dayjs().format('MMM DD, ddd');

const bookings = 24;
const balance = '$2M';

const ccBalance = 65844.25.toLocaleString(undefined, {maximumFractionDigits: 2});
const cardNumber = ['****', '****', '****', '3422'];

dayjs.extend(relativeTime);
const recentMeetingTimeLeft = dayjs(new Date()).add(58, 'minutes').toNow();

const meetingPeople = [
    { key: '1', name: 'Zach', img: '' },
    { key: '2', name: 'Mark', img: '' },
    { key: '3', name: 'Chris', img: '' }
];

const Overview = () => {
    return <div className="full-width flex-box-start flex-col overview-container">

        {/* tabs and search  */}
        <div className="flex-box-end v-center tabs-row">
            <Tabs tabList={overviewTabs}/>
            <div className="search-input">
                <input type="text" placeholder="search here"/>
                <span className="font-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </div>
        </div>

        {/* heading and link */}
        <div className="v-center header-row">
            <h1 className="light">My Dashboard</h1>
            <a className="app-sub-title dark-green" href="#">Manage &gt;</a>
        </div>

        {/* section tabs */}
        <div className="flex-box-start v-center section-tabs-row">
            <Tabs tabList={sectionTabs}/>
        </div>

        {/* cards */}
        <div className="cards">

            {/* row 1 */}
            <div className="app-card occupied flex-box-center flex-col v-center">
                <span>22</span>
                <span>Country Served</span>
            </div>

            <div className="app-card country-served flex-box-center flex-col v-center">
                <span>22</span>
                <span className="light text-center">Country Served</span>
            </div>

            <div className="app-card earnings flex-box-start flex-col v-center">
                <span className="font-icon dark-green">
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                </span>
                <span className="card-title">Today's Earning</span>

                <span className="today-date dark-green">{currDate}</span>
                <span className="amount">${todayEarning}</span>
            </div>

            <div className="app-card balance flex-box-start flex-col">
                <div className="flex-box-center flex-col v-center">
                    <span className="card-sub-title">Today's Bookings</span>
                    <span className="bookings">{bookings}</span>
                </div>

                <div className="available-balance flex-box-center flex-col v-center">
                    <span className="card-sub-title">Total Balance</span>
                    <span className="amount">{balance}</span>
                </div>
            </div>


            {/* row 2 */}
            <div className="app-card credit-card flex-box-center flex-col">
                <div>
                    <span className="font-icon">
                        <FontAwesomeIcon icon={faCcVisa}/>
                    </span>
                </div>

                <div className="flex-box-start flex-col">
                    <span className="amount">${ccBalance}</span>
                    <span className="small">Balance</span>
                </div>

                <div className="card-number flex-box-start v-center">
                    {cardNumber.map(d => {
                        return <span className="card-d">{d}</span>
                    })}
                </div>

                <div></div>
            </div>

            <div className="app-card meetings flex-box-start flex-col v-center">
                <span className="app-sub-title full-width">Your Meetings</span>
                <span className="next-meeting small full-width">{recentMeetingTimeLeft}</span>

                <div className="flex-box-start v-center full-width meetings">
                    <div className="meeting-people flex-box-start">
                        {meetingPeople.map(p => {
                            return <span className="people flex-box-center v-center"
                                style={{'margin-left': '-8px'}}
                            >{p.name[0].toUpperCase()}</span>
                        })}
                    </div>
                    
                    <span className="popout-icon flex-box-center v-center enable-hover">
                        <FontAwesomeIcon icon={faArrowUp}/>
                    </span>
                </div>
            </div>
        </div>
    </div>
};

export default Overview;