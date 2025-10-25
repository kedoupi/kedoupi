# JavaScript 学习笔记

## 基础概念

### 变量声明
- `var` - 函数作用域，存在变量提升
- `let` - 块级作用域
- `const` - 常量，不可重新赋值

### 数据类型
- 基本类型：number, string, boolean, undefined, null, symbol
- 引用类型：object, array, function

## 高级特性

### 闭包
闭包是指有权访问另一个函数作用域中变量的函数。

```javascript
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}
```

### 原型链
JavaScript通过原型链实现继承。

### Promise 和 async/await
处理异步操作的新方式。

## 学习资源
- [MDN JavaScript 指南](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)

## 学习计划
- [ ] 深入理解闭包和原型链
- [ ] 掌握ES6+新特性
- [ ] 学习函数式编程
- [ ] 实践异步编程模式
