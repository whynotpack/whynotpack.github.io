import {Notify} from "@wnp/notify";


class Tabs {
    constructor () {
        this.tabs = $('.tabs');
        if (this.tabs.length <= 0) return false;
        this.input = this.tabs.find('input');
        this.codeElems = this.tabs.find('code');
        this.notify = new Notify({max_count: 1, auto_delete: true, delay: 3});

        //init notifies and clicks
        this.copyCommand();
    }
    addClass (tab) {
        this.tabs.find('.tabs__tab').removeClass('currentTab');
        this.tabs.find(tab).addClass('currentTab');
    }

    copyCommand () {
        const input = this.input;
        const notify = this.notify;
        this.codeElems.click(function () {
            const text = $(this).text();
            input.val(text).select();
            document.execCommand("copy");
            notify({
                type: 'success',
                title: 'Скопировано в буфер',
                description: `Команда: ${text}`,
                link_title: 'Показать',
                auto_delete: true,
                delay: 4
            });
        });
    }

    getTab () {
        const location = window.location.href;
        const hash = location.split('#');
        const tab = `#${hash[1]}`;
        return tab;
    }
    setTab (data) {
        const location = window.location.href;
        const hash = location.split('#');
        const tab = data ? data : `#${hash[1]}`;
        if (tab !== undefined) {
            this.addClass(tab)
        } else {
            return false;
        }
    }
}

export {Tabs}
