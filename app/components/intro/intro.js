import {Notify} from "@wnp/notify";

const intro = () => {
    const selector = $('.intro');
    if (selector.length <= 0) return false;
    const notify = new Notify({max_count: 2});
    notify({
        type: 'info',
        title: 'Добро пожаловать!',
        description: `Whynotpack - быстрый и лёгкий сборщик для Вашей вёрстки. Если хотите познакомиться с Whynotpack поближе, нажмите на кнопку "Документация"`,
        link_title: 'Показать',
        auto_delete: true,
        delay: 10
    });
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
            link_title: 'Показать',
            auto_delete: true,
            delay: 4
        });
    });
};

export {intro};
