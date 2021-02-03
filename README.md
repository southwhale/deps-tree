# deps-tree
分析项目dependencies依赖树图

## 介绍
搜寻依赖包的逻辑：从当前运行目录向上级目录回溯直到找到node_modules目录为将要解析的目录 

## 使用

1. 全局安装 `npm install deps-tree -g`

2. 项目里安装 `npm install deps-tree --save-dev`

3. 导出解析后的关系数据
```
    // parse函数可传入包名数组作为将被排除解析的包列表
    const { parse } = require('deps-tree');
    const { list, set, map, packageName } = parse();
    ...
```