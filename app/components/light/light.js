const lightToggle = () => {
    let button = $('.light__icon');
    button.click(function () {
       $(this).siblings('.light__menu').toggleClass('visible');
    });
};

export {lightToggle}