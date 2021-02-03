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

## demo result

```
atm
|
|-- accepts
|   |
|   |-- mime-types
|   |
|   |-- negotiator
|
|-- after
|
|-- arraybuffer.slice
|
|-- axios
|   |
|   |-- follow-redirects
|
|-- backo2
|
|-- base64-arraybuffer
|
|-- base64id
|
|-- better-assert
|   |
|   |-- callsite
|
|-- blob
|
|-- callsite
|
|-- component-bind
|
|-- component-emitter
|
|-- component-inherit
|
|-- cookie
|
|-- core-js
|
|-- cron
|   |
|   |-- moment-timezone
|
|-- date-format
|
|-- debug
|   |
|   |-- ms
|
|-- engine.io
|   |
|   |-- accepts
|   |
|   |-- base64id
|   |
|   |-- cookie
|   |
|   |-- debug
|   |
|   |-- engine.io-parser
|   |
|   |-- ws
|
|-- engine.io-client
|   |
|   |-- component-emitter
|   |
|   |-- component-inherit
|   |
|   |-- debug
|   |
|   |-- engine.io-parser
|   |
|   |-- has-cors
|   |
|   |-- indexof
|   |
|   |-- parseqs
|   |
|   |-- parseuri
|   |
|   |-- ws
|   |
|   |-- xmlhttprequest-ssl
|   |
|   |-- yeast
|
|-- engine.io-parser
|   |
|   |-- after
|   |
|   |-- arraybuffer.slice
|   |
|   |-- base64-arraybuffer
|   |
|   |-- blob
|   |
|   |-- has-binary2
|
|-- eventemitter3
|
|-- flatted
|
|-- follow-redirects
|   |
|   |-- debug
|
|-- fs-extra
|   |
|   |-- graceful-fs
|   |
|   |-- jsonfile
|   |
|   |-- universalify
|
|-- futurectp
```

