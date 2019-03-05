const lightToggle = () => {
    let button = $('.light');
    button.click(function () {
       $(this).find('.light__menu').toggleClass('visible');
    });
};

export {lightToggle}