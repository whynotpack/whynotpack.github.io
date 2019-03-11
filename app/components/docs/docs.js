import {lightToggle} from "../light/light";
import {burgerToggle} from "../burger/burger";
import {Tabs} from "../tabs/tabs";
import {Sidebar} from "../sidebar/sidebar";

class Docs {
    constructor () {
        this.selector = $('.docs');
        this.sidebar = new Sidebar();
        this.tabs = new Tabs();
        this.lightButtonInit = lightToggle;
        this.burgerButtonInit = burgerToggle;
    }
    updateState () {
        window.onhashchange = () => {
            this.tabs.setTab();
            this.sidebar.setActive(this.tabs.getTab());
        } 
    }
    init () {
        this.lightButtonInit();
        this.burgerButtonInit();
        this.sidebar.handlersInit();   
        this.tabs.setTab();
        this.sidebar.setActive(this.tabs.getTab());
    }
    start () {
        if (this.selector.length <= 0) return false;
        this.init();
        this.updateState();
        this.sidebar.onClick(href => {
            this.tabs.setTab(href);
            this.sidebar.setActive(href);
        })
    }
}

export {Docs}

