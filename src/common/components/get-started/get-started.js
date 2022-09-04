import "./get-started.scss";

const GetStarted = () => {
    return <div className="get-started-container flex-box-start v-center flex-col">
        <h3 className="app-sub-title dark-green">Booking Application</h3>

        <h1 className="app-title">Your Global Hub</h1>

        <div className="about-app-text">A dashboard allowing you to manage all of your bookings and balances</div>

        <div className="ask-email flex-box-start v-center">
            <input type="email" placeholder="Enter your email address"/>
            <div className="button-container">
                <button className="btn-rect-green">Get Started</button>
            </div>
        </div>
    </div>;
}

export default GetStarted;