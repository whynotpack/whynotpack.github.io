//polyfill
(function () {
    if ( typeof window.CustomEvent === "function" ) return false; //If not IE
    function CustomEvent ( event, params ) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        let evt = document.createEvent( 'CustomEvent' );
        evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();

class Sidebar {
    constructor () {
        this.customEvent = new CustomEvent('tabChange');
        this.href = null;
    }
    getHref (event) {
        const target = $(event.target);
        const href = target.attr('href');
        if (href !== '/') {
            this.href = href;
            window.dispatchEvent(this.customEvent);
        }
    }

    onClick (callback) {
        window.addEventListener('tabChange', () => {
            callback(this.href);
        });
    }

    handlersInit () {
        const links = document.querySelectorAll('.sidebar__item');
        [...links].forEach(link => {
            link.addEventListener('click', this.getHref.bind(this));
        })
    }
}

export {Sidebar}