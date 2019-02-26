const prompt = require('prompt');
const fs = require('fs');
const path = require('path');
const pathToViews = '../../app/components/';
let nameReg = new RegExp(/^[a-z]/, 'g');
let componentName, componentPath;


function makeFolder (pathToFolder) {
    fs.mkdirSync(pathToFolder, { recursive: true });
}

function transformComponentName (name) {
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

function createFile (component,type, content) {
    var filepath = path.join(__dirname, `${pathToViews}/${component}/${component}.${type}` );
    var fileContent = content;
    fs.writeFile(filepath, fileContent, (err) => {
        if (err) throw err;
    });
}

function createContentJs (name) {
    return `const ${name} = () => {
    console.log('${name} is init ^_^');
};

export {${name}};
`
}

function addImport (name) {
    let pathIndex = path.join(__dirname, `${pathToViews}/components.scss`);
    let oldData;
    let newImport = '@import';
    fs.readFile(pathIndex, function (err,data) {
        oldData = data.toString();
        let newLine = oldData.length !== 0 ? '\n' : '';
        let newData = `${newImport} "${name}/${name}";`;
        let result = oldData + newLine + newData;
        fs.writeFile(pathIndex,result, function (err) {
            if (err) throw err;
        });
    });
}

let nameScheme = {
    properties: {
        component_name: {
            pattern: nameReg,
            message: 'Компонент должен иметь только латинские буквы в нижнем регистре',
            required: true,
            description: 'Введите название компонента'
        }
    }
};

prompt.start();

prompt.get(nameScheme, function (err, result) {
    componentName = transformComponentName(result.component_name);
    componentPath = path.join(__dirname, `${pathToViews}/${componentName}` );
    console.log(componentName,componentPath)
    makeFolder(componentPath);
    createFile(componentName,'js', createContentJs(componentName));
    createFile(componentName,'scss', '');
    createFile(componentName,'hbs', '');
    addImport(componentName);
    console.log(`Компонент ${componentName} был создан.`)
});