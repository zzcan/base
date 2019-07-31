## 数值转换

* `Number` 转换规则：如果是对象，则调用对象的valueOf()方法，如果转换的结果是NaN，则调用对象的toString()方法

* `parseInt` 如果第一个字符不是数字字符或者负号，就会返回NaN；如果第一个字符是数字字符，则会继续解析第二个字符，直到解析完所有后续字符或者遇到了一个非数字字符。

## Object

### Object的每个实例都具有下列属性和方法

* Constructior: 保存着用于创建当前对象的函数

* hasOwnProperty: 用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在

* isPrototypeOf(object): 用于检查传入的对象是否是另一个对象的原型

* valueOf、toString 返回对象的字符串表示

## Date

* `Date.now()`和`+new Date()`一样都会返回当前时间戳

## 面向对象

### 创建对象

* 工厂模式
``` js
  function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
      console.log(this.name);
    }
    return o;
  }
```

* 构造函数模式

``` js
  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
      console.log(this.name);
    };
  }
  
  var person = new Person();
```

* 原型模式

``` js
  function Person(name, age, job) {
    
  }

  Person.prototype.name = 'name';
  Person.prototype.age = 'age';
  Person.prototype.job = 'job';
  Person.prototype.sayName = function() {
    console.log(this.name);
  }

  var person = new Person();
```

* 组合使用构造函数模式和原型模式

``` js
  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  Person.prototype.sayName = function() {
    console.log(this.name);
  }

  var person = new Person();
```

### 继承

* 借用构造函数

``` js
  function SuperType(name) {
    this.name = name;
  }

  function SubType() {
    SuperType.call(this, 'hahah')
  }

```

* 组合继承

``` js
  function SuperType(name) {
    this.name = name;
  }

  SuperType.prototype.sayName = function() {
    console.log(this.name);
  }

  function SubType() {
    SuperType.call(this, 'hahah')
  }

  SubType.prototype = new SuperType();

  var o = new SubType();

```

* 原型式继承

``` js
  // Object.create
  function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }

  var person = {
    name: 'sfd',
    colors: ['red', 'blue', 'green']
  }

  var anotherPerson = object(person);

  // use Object.create

  var anotherPerson = Object.create(person);
```

* 寄生式继承

拓展原型式继承

``` js
  function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }

  var person = {
    name: 'sfd',
    colors: ['red', 'blue', 'green']
  }

  function createAnother(original) {
    var clone = object(person);
    clone.sayHi = function() {
      console.log('Hi');
    }

    return clone;
  }

  var anotherPerson = createAnother(person);
```

* 寄生式组合式继承

通过构造函数来继承属性，通过原型链混成形式来继承方法

``` js
  function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }

  inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
  }

  function SuperType(name) {
    this.name = name;
  }

  SuperType.prototype.sayName = function() {
    console.log(this.name);
  }

  function SubType() {
    SuperType.call(this, 'hahah')
  }

  inheritPrototype(SubType, SuperType);

  var o = new SubType();
```
