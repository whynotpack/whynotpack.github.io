const prompt = require('prompt');
const fs = require('fs');
const path = require('path');
const pathToViews = '../../app/pages/';
const pathToPages = '../pages/';
let nameReg = new RegExp(/^[a-z]/, 'g');
let pageName, pagePath;


function transformpageName (name) {
    let splitName = name.split('');
    let result = [];
    for(let i = 0; i < splitName.length; i++) {
        let element = splitName[i];
        if (element.includes('-')) {
            element = '_';
        }
        result.push(element);
    }
    return result.join('');
}

function getLayout(callback) {
    let filepath = path.join(__dirname, `${pathToViews}/layouts/layout.hbs` );
    fs.readFile(filepath, function (err,data) {
        let result = data.toString();
        callback(result);
    });
}


function createFile (page,type, content) {
    let filepath = path.join(__dirname, `${pathToViews}/${page}.${type}` );
    let fileContent = content;
    fs.writeFile(filepath, fileContent, (err) => {
        if (err) throw err;
    });
}

function updatePageList (pageName, callback) {
    let filepath = path.join(__dirname, pathToPages, 'pagelist.json' );
    fs.readFile(filepath, function (err,data) {
        let result = data.toString();
        let parsed = JSON.parse(result);
        parsed.pages.push(pageName)
        let content = JSON.stringify(parsed)
        fs.writeFile(filepath, content, (err) => {
            if (err) throw err;
        });
        callback();
    });
}


let nameScheme = {
    properties: {
        page_name: {
            pattern: nameReg,
            message: 'Название страницы должено иметь только латинские буквы в нижнем регистре',
            required: true,
            description: 'Введите название страницы'
        }
    }
};

prompt.start();

prompt.get(nameScheme, function (err, result) {

    pageName = transformpageName(result.page_name);
    updatePageList(pageName, () => {
        pagePath = path.join(__dirname, `${pathToViews}/${pageName}` );
        getLayout(content => {
            createFile(pageName,'hbs', content);
        });
        console.log(`Страница ${pageName} была создана.`);
    });
});