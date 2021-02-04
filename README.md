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
node-proxymock
|- body-parser
|   |- bytes
|   |- content-type
|   |- debug
|   |   |- ms
|   |
|   |- depd
|   |- http-errors
|   |   |- depd
|   |   |- inherits
|   |   |- setprototypeof
|   |   |- statuses
|   |   |- toidentifier
|   |
|   |- iconv-lite
|   |   |- safer-buffer
|   |
|   |- on-finished
|   |   |- ee-first
|   |
|   |- qs
|   |- raw-body
|   |   |- bytes
|   |   |- http-errors
|   |   |   |- depd
|   |   |   |- inherits
|   |   |   |- setprototypeof
|   |   |   |- statuses
|   |   |   |- toidentifier
|   |   |
|   |   |- iconv-lite
|   |   |   |- safer-buffer
|   |   |
|   |   |- unpipe
|   |
|   |- type-is
|       |- media-typer
|       |- mime-types
|           |- mime-db
|
|- chalk
|   |- ansi-styles
|   |   |- @types/color-name
|   |   |- color-convert
|   |       |- color-name
|   |
|   |- supports-color
|       |- has-flag
|
|- cors
|   |- object-assign
|   |- vary
|
|- express
|   |- accepts
|   |   |- mime-types
|   |   |   |- mime-db
|   |   |
|   |   |- negotiator
|   |
|   |- array-flatten
|   |- body-parser
|   |   |- bytes
|   |   |- content-type
|   |   |- debug
|   |   |   |- ms
|   |   |
|   |   |- depd
|   |   |- http-errors
|   |   |   |- depd
|   |   |   |- inherits
|   |   |   |- setprototypeof
|   |   |   |- statuses
|   |   |   |- toidentifier
|   |   |
|   |   |- iconv-lite
|   |   |   |- safer-buffer
|   |   |
|   |   |- on-finished
|   |   |   |- ee-first
|   |   |
|   |   |- qs
|   |   |- raw-body
|   |   |   |- bytes
|   |   |   |- http-errors
|   |   |   |   |- depd
|   |   |   |   |- inherits
|   |   |   |   |- setprototypeof
|   |   |   |   |- statuses
|   |   |   |   |- toidentifier
|   |   |   |
|   |   |   |- iconv-lite
|   |   |   |   |- safer-buffer
|   |   |   |
|   |   |   |- unpipe
|   |   |
|   |   |- type-is
|   |       |- media-typer
|   |       |- mime-types
|   |           |- mime-db
|   |
|   |- content-disposition
|   |   |- safe-buffer
|   |
|   |- content-type
|   |- cookie
|   |- cookie-signature
|   |- debug
|   |   |- ms
|   |
|   |- depd
|   |- encodeurl
|   |- escape-html
|   |- etag
|   |- finalhandler
|   |   |- debug
|   |   |   |- ms
|   |   |
|   |   |- encodeurl
|   |   |- escape-html
|   |   |- on-finished
|   |   |   |- ee-first
|   |   |
|   |   |- parseurl
|   |   |- statuses
|   |   |- unpipe
|   |
|   |- fresh
|   |- merge-descriptors
|   |- methods
|   |- on-finished
|   |   |- ee-first
|   |
|   |- parseurl
|   |- path-to-regexp
|   |- proxy-addr
|   |   |- forwarded
|   |   |- ipaddr.js
|   |
|   |- qs
|   |- range-parser
|   |- safe-buffer
|   |- send
|   |   |- debug
|   |   |   |- ms
|   |   |
|   |   |- depd
|   |   |- destroy
|   |   |- encodeurl
|   |   |- escape-html
|   |   |- etag
|   |   |- fresh
|   |   |- http-errors
|   |   |   |- depd
|   |   |   |- inherits
|   |   |   |- setprototypeof
|   |   |   |- statuses
|   |   |   |- toidentifier
|   |   |
|   |   |- mime
|   |   |- ms
|   |   |- on-finished
|   |   |   |- ee-first
|   |   |
|   |   |- range-parser
|   |   |- statuses
|   |
|   |- serve-static
|   |   |- encodeurl
|   |   |- escape-html
|   |   |- parseurl
|   |   |- send
|   |       |- debug
|   |       |   |- ms
|   |       |
|   |       |- depd
|   |       |- destroy
|   |       |- encodeurl
|   |       |- escape-html
|   |       |- etag
|   |       |- fresh
|   |       |- http-errors
|   |       |   |- depd
|   |       |   |- inherits
|   |       |   |- setprototypeof
|   |       |   |- statuses
|   |       |   |- toidentifier
|   |       |
|   |       |- mime
|   |       |- ms
|   |       |- on-finished
|   |       |   |- ee-first
|   |       |
|   |       |- range-parser
|   |       |- statuses
|   |
|   |- setprototypeof
|   |- statuses
|   |- type-is
|   |   |- media-typer
|   |   |- mime-types
|   |       |- mime-db
|   |
|   |- utils-merge
|   |- vary
|
|- inquirer
|   |- ansi-escapes
|   |   |- type-fest
|   |
|   |- chalk
|   |   |- ansi-styles
|   |   |   |- @types/color-name
|   |   |   |- color-convert
|   |   |       |- color-name
|   |   |
|   |   |- supports-color
|   |       |- has-flag
|   |
|   |- cli-cursor
|   |   |- restore-cursor
|   |       |- onetime
|   |       |   |- mimic-fn
|   |       |
|   |       |- signal-exit
|   |
|   |- cli-width
|   |- external-editor
|   |   |- chardet
|   |   |- iconv-lite
|   |   |   |- safer-buffer
|   |   |
|   |   |- tmp
|   |       |- os-tmpdir
|   |
|   |- figures
|   |   |- escape-string-regexp
|   |
|   |- lodash
|   |- mute-stream
|   |- run-async
|   |- rxjs
|   |   |- tslib
|   |
|   |- string-width
|   |   |- emoji-regex
|   |   |- is-fullwidth-code-point
|   |   |- strip-ansi
|   |       |- ansi-regex
|   |
|   |- strip-ansi
|   |   |- ansi-regex
|   |
|   |- through
|
|- lodash
|- log4js
|   |- date-format
|   |- debug
|   |   |- ms
|   |
|   |- flatted
|   |- rfdc
|   |- streamroller
|       |- date-format
|       |- debug
|       |   |- ms
|       |
|       |- fs-extra
|           |- graceful-fs
|           |- jsonfile
|           |- universalify
|
|- node-cert
|- portfinder
    |- async
    |   |- lodash
    |
    |- debug
    |   |- ms
    |
    |- mkdirp
        |- minimist
```

