import {lightToggle} from "../light/light";
import {Tabs} from "../tabs/tabs";
import {Sidebar} from "../sidebar/sidebar";

class Docs {
    constructor () {
        this.sidebar = new Sidebar();
        this.tabs = new Tabs();
        this.lightButtonInit = lightToggle;
        this.initTab = '#install';
    }
    init () {
        this.lightButtonInit();
        this.sidebar.handlersInit();
        this.tabs.setTab(this.initTab);
    }
    start () {
        this.init();
        this.sidebar.onClick(href => {
            this.tabs.setTab(href);
        })
    }
}

export {Docs}

