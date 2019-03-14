import {Notify} from "@wnp/notify";

const notify = new Notify({
    autoDelete: true,
    showTime: 3,
    maxCount: 4
});

const intro = () => {
    const selector = $('.intro');
    if (selector.length <= 0) return false;
    const codeElems = selector.find('code');
    const input = selector.find('input');
    codeElems.click(function () {
        const text = $(this).text();
        input.val(text).select();
        document.execCommand("copy");
        notify.message('s', `Скопировано в буфер`);
    });
};

export {intro};
