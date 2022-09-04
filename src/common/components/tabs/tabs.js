import "./tabs.scss";

const Tabs = (props) => {
    const tabsArr = props.tabList.map( (tab) => {
        return <span 
            key={tab.key}
            className={tab.active ? 'tab-item active enable-hover' : 'tab-item enable-hover'}>{tab.title}
        </span>
    });

    return <div className="flex-box-start v-center tabs-container">
        {tabsArr}
    </div>;
}

export default Tabs;
