const { resolve } = require('path');
const ghpages = require('gh-pages');
const pathToFolder = resolve(process.cwd(), 'build');

ghpages.publish(pathToFolder, {
    branch: 'master',
    repo: 'https://github.com/whynotpack/whynotpack.github.io.git'
}, () => {
    console.log('Your project is published');
});