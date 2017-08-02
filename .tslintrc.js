module.exports = {
    extends: 'tslint-config-standard',
    rules: {
        // 行尾必须加分号
        'semicolon': [true, 'always'],
        // 缩进使用 4 个空格
        'indent': [true, 'spaces', 4],
        // 要求使用 let 或 const 而不是 var
        'no-var-keyword': true,
        // 优先使用 const，其次才是 let
        'prefer-const': true,
        //if,for,do等必须加花括号
        'curly': true,
        //不允许行末出现空格
        'no-trailing-whitespace': true,
        //使用单引号
        'quotemark': [true, 'single', 'avoid-escape', 'avoid-template'],
        //强制使用空格
        'whitespace': [true, 'check-branch', 'check-decl', 'check-operator', 'check-module', 'check-separator', 'check-type', 'check-typecast', 'check-preblock']
    }
};
