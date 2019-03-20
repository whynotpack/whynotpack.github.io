import {Notify} from "@wnp/notify";

const intro = () => {
    const selector = $('.intro');
    if (selector.length <= 0) return false;
    const notify = new Notify({max_count: 1, auto_delete: true, delay: 3});
    const codeElems = selector.find('code');
    const input = selector.find('input');
    codeElems.click(function () {
        const text = $(this).text();
        input.val(text).select();
        document.execCommand("copy");
        notify({
            type: 'success',
            title: 'Скопировано в буфер',
            description: `Команда: ${text}`,
            link_title: 'Показать'
        });
    });
};

export {intro};
