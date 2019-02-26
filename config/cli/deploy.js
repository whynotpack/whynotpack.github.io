const { resolve } = require('path');
const ghpages = require('gh-pages');
const pathToFolder = resolve(process.cwd(), 'build');
const { deployBranch, repository} = require('../../package.json');

ghpages.publish(pathToFolder, {
    branch: deployBranch,
    repo: repository + '.git'
}, () => {
    console.log(`
        Your project is published:
        branch: ${deployBranch};
        repository: ${repository};
    `);
});