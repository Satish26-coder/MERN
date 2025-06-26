/*NPM=>NODE PACKAGE MANAGER
-> online repository
-> command line tool
->what is a package?
->Eg: express, mongoose, react, angular, vue
->package.json file
->package-lock.json file
->how to create a package.json file?
->npm init
->how to install a package? and using external packages
->npm install <package-name>
->npm i <package-name>
->how to use an installed package? in our code
->require('package-name')
*/
const lod = require('lodash');//common practice to assign lodash to _ variable
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array:", num);

//using a lodash function to shuffle->shuffle()
let shufnum = lod.shuffle(num);
console.log("Shuffled Array:", shufnum);

console.log("unique values:", lod.uniq([1, 2, 2, 3, 4, 4, 5]));
//npm uninstall <package-name> to uninstall a package
//npm install <package-name> --save-dev to install a package as a dev dependency