const fs = require('fs');
const path = require('path');

function checkPackage(depList, depSet, depMap, rootDirectoryPath, { recursiveDevDependency, recursiveDependency }) {
  const childSet = new Set();
  depList.forEach(item => {
    const packageJsonPath = path.join(rootDirectoryPath, 'node_modules', item, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const { dependencies, devDependencies} = require(packageJsonPath);
      const childDeps = [];
      if (recursiveDependency) {
        deps.push(...(dependencies || []));
      }
      if (recursiveDevDependency) {
        deps.push(...(devDependencies || []));
      }
      if (childDeps.length) {
        const depNames = Object.keys(childDeps);
        depNames.forEach(item => {
          if (!depSet.has(item)) {
            childSet.add(item);
          }
        });

        if (!depMap[item]) {
          // const childFullDeps = [];
          // for (let depName in childDeps) {
          //   const depVersion = childDeps[depName];
          //   childFullDeps.push(depName + '#' + depVersion);
          // }
          depMap[item] = depNames;
        }
      }
      else {
        depMap[item] = [];
      }
    }
  });

  if (childSet.size) {
    const childList = Array.from(childSet);
    putSet(depSet, childList);
    checkPackage(childList, depSet, depMap, rootDirectoryPath, { recursiveDevDependency, recursiveDependency });
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

function parse(
  
  {
    toParseDevDependency,
    toParseDependency,
    recursiveDevDependency,
    recursiveDependency,
    excludeRootDeps,
  } = {
    toParseDevDependency: false,
    toParseDependency: true,
    recursiveDevDependency: false,
    recursiveDependency: true,
    excludeRootDeps: [],
  }
) {
  const rootDirectoryPath = findRootDirectory();
  const packageJsonPath = path.join(rootDirectoryPath, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const { dependencies, name, devDependencies } = require(packageJsonPath);
    const deps = [];
    if (toParseDependency) {
      deps.push(...(dependencies || []));
    }
    if (toParseDevDependency) {
      deps.push(...(devDependencies || []));
    }
    const depList = Object.keys(deps).filter(s => !excludeRootDeps.includes(s));
    const depSet = new Set(depList);
    const depMap = Object.create(null);
    const rootDepList = depList.concat();
    const rootDepSet = new Set(rootDepList);

    checkPackage(depList, depSet, depMap, rootDirectoryPath, { recursiveDevDependency, recursiveDependency });
    const resultDepsList = Array.from(depSet).sort((a, b) => a.localeCompare(b));

    return {
      list: resultDepsList,
      set: depSet,
      map: depMap,
      packageName: name,
      rootSet: rootDepSet,
      rootList: rootDepList
    };
  }
  else {
    console.warn('package.json or node_module directory not found.');
  }
}

module.exports = {
  parse
};
