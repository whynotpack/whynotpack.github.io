class Tabs {
    constructor (initTab) {
        this.tabs = $('.tabs');
        this.default = initTab;
    }
    addClass (tab) {
        this.tabs.find('.tabs__tab').removeClass('currentTab');
        this.tabs.find(tab).addClass('currentTab');
    }
    setTab (data) {
        const location = window.location.href;
        const hash = location.split('#');
        const tab = data ? data : `#${hash[1]}`;
        if (!data) {
            if (tab !== undefined) {
                this.addClass(this.default)
            } else {
                return false;
            }
        } else {
            if (tab !== undefined) {
                this.addClass(tab)
            } else {
                return false;
            }
        }

    }
}

export {Tabs}