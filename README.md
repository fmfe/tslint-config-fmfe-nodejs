# @fmfe/tslint-config-fmfe-nodejs

TSLint configuration of [Followme Frontend Team](https://github.com/fmfe)
Node.js group, base on [standard](https://github.com/standard/standard).

## usage

edit configuration file:

```
$ touch tslint.json
```
```json
{
    "extends": "@fmfe/tslint-config-fmfe-nodejs"
}
```

## install

```
$ npm install @fmfe/tslint-config-fmfe-nodejs -D
$ ./node_modules/.bin/tslint --type-check --project tslint.json *.ts
```
or
```
$ npm install tslint @fmfe/tslint-config-fmfe-nodejs -g
$ tslint *.js
```

## rules

*   基本规则
    *   [standard 规范](https://standardjs.com/rules-zhcn.html)
*   附加规则
    *   行尾必须加分号
    *   缩进使用 4 个空格
    *   要求使用 let 或 const 而不是 var
    *   if,do,while等必须加花括号
    *   不允许行末出现空格
    *   使用单引号
    *   强制使用空格
## contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## license
this repo is released under the [MIT License](http://www.opensource.org/licenses/MIT).
