import dayjs from "dayjs";
import { Calendar } from "react-calendar";
import "./calendar.scss";

import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const today = dayjs().format("MMM, DD dddd");

const userName = "Mark Gibbons";
const userRole = "super admin";

const markDates = [ 
    dayjs().subtract(5, 'days').format("DD MM YY"),
    dayjs().subtract(2, 'days').format("DD MM YY"),
    dayjs().add(9, 'days').format("DD MM YY"),
    dayjs().add(7, 'days').format("DD MM YY")
];

const specialDates = [ 
    dayjs().subtract(3, 'days').format("DD MM YY"),
    dayjs().add(8, 'days').format("DD MM YY"),
];


const Scheduler = () => {
    return <div className="scheduler full-width flex-box-start flex-col">

        <div className="scheduler-header flex-box-start v-center">
            <div className="icons">
                <span className="icon-email">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </span>
                <span className="icon-bell">
                    <FontAwesomeIcon icon={faBell}/>
                </span>
            </div>

            <div className="flex-box-end full-width">
                <div className="user-info flex-box-start flex-col">
                    <span className="app-sub-title">{userName}</span>
                    <span className="small less-opacity">{userRole}</span>
                </div>

                <span className="user-icon">
                    <FontAwesomeIcon icon={faUserTie}/>
                </span>
            </div>
        </div>

        <div className="today-date">{today}</div>

        <Calendar value={new Date()}
            tileClassName={({date, view}) => {
                if (markDates.find(d => d === dayjs(date).format("DD MM YY"))) {
                    return 'highlight-date'
                }
                if (specialDates.find(d => d === dayjs(date).format("DD MM YY"))) {
                    return 'special-date'
                }
            }}
        />
    </div>
};

export default Scheduler;