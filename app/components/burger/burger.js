const burgerToggle = () => {
    let button = $('.burger__icon');
    button.click(function () {
        $('body').toggleClass('menuIsOpen');
    });
};

export {burgerToggle}