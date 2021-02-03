const fs = require('fs');
const path = require('path');

function checkPackage(depList, depSet, depMap, rootDirectoryPath) {
  const childSet = new Set();
  depList.forEach(item => {
    const packageJsonPath = path.join(rootDirectoryPath, 'node_modules', item, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const childDeps = require(packageJsonPath).dependencies;
      if (childDeps) {
        const depNames = Object.keys(childDeps);
        depNames.forEach(item => {
          if (!depSet.has(item)) {
            childSet.add(item);
          }
        });

        if (!depMap.has(item)) {
          // const childFullDeps = [];
          // for (let depName in childDeps) {
          //   const depVersion = childDeps[depName];
          //   childFullDeps.push(depName + '#' + depVersion);
          // }
          depMap.set(item, depNames);
        }
      }
      else {
        depMap.set(item, []);
      }
    }
  });

  if (childSet.size) {
    const childList = Array.from(childSet);
    putSet(depSet, childList);
    checkPackage(childList, depSet, depMap, rootDirectoryPath);
  }
}

function putSet(setA, listB) {
  for (let elem of listB) {
    setA.add(elem);
  }
}

function findRootDirectory() {
  var dir = process.cwd(), prev;
  while (true) {
    if (fs.existsSync(path.join(dir, 'node_modules'))) {
      return dir;
    }
    // Try the parent dir next
    prev = dir
    dir = path.join(dir, '..');
    if (prev === dir) {
      // Got to the top
      // dir = '.'
      return dir;
    }
  }
}

function parse(excludeDeps = []) {
  const rootDirectoryPath = findRootDirectory();
  const packageJsonPath = path.join(rootDirectoryPath, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const { dependencies, name } = require(packageJsonPath);
    const depList = Object.keys(dependencies).filter(s => !excludeDeps.includes(s));
    const depSet = new Set(depList);
    const depMap = new Map();

    checkPackage(depList, depSet, depMap, rootDirectoryPath);
    const resultDepsList = Array.from(depSet).sort((a, b) => a.localeCompare(b));

    return {
      list: resultDepsList,
      set: depSet,
      map: depMap,
      packageName: name
    };
  }
  else {
    console.warn('package.json or node_module directory not found.');
  }
}

module.exports = {
  parse
};
