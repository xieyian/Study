# Javascript

1. console.log("aaa")
//print

2. 数据类型：
    string
    number
    boolean
    array: [] // 
    object: {}
    set: (x7.add(1)) 删除重复值 []
    map: 映射关系 (x6.set(x,1)) {}

    console.log(Number.isInteger(x2))
    //查是否为整数

    console.log(Object.prototype.toString.call(x1))
    //查类别


        ```Javascript
            // 1. string
        x1 = "string"

        // 2. number
        x2 = 2
        x3 = 2.3

        // 3. boolean
        x4 = true
        x5 = false

        // 4. array
        x6 = [[],2,3]

        // 5. object
        x7 = {
        x: 1,
        y: 2
        }

        // 6. map {} -> Map
        x8 = new Map()

        // 7. set [] -> Set
        x9 = new Set()

        x10 = undefined // 任意类型的空值
        x11 = null // 对象object的空值
        x12 = NaN // 数字的空值

         

        // check type roughly
        console.log(typeof x1)
        console.log(typeof x2)
        console.log(typeof x3)
        console.log(Number.isInteger(x2))
        console.log(Number.isInteger(x3))
        console.log(typeof x4)
        console.log(typeof x6)
        console.log(typeof x7)
        console.log(typeof x8)

        // check type precisely
        console.log(Object.prototype.toString.call(x1))
        console.log(Object.prototype.toString.call(x2))
        console.log(Object.prototype.toString.call(x3))
        console.log(Object.prototype.toString.call(x4))
        console.log(Object.prototype.toString.call(x5))
        console.log(Object.prototype.toString.call(x6))
        console.log(Object.prototype.toString.call(x7))
        console.log(Object.prototype.toString.call(x8))
        console.log(Object.prototype.toString.call(x9))

        // integral part
        console.log(parseInt(3/2))

        // decimal part
        console.log(3/2%1)

        // round 
        console.log(Math.round(3/2))

        // 指数运算 4的(1/3)次方
        4**(1/3)

        // 自增自减
        x = 1
        y1 = x++ //先赋值后自增
        y2 = ++x //先自增后赋值
        console.log(y1) // y1=1
        console.log(y2) // y2=2

        // logical operation
        !(true || false)
        true && false
        !true

        // number to string
        String(1)
        ""+1
        [1].join('')
        `${1}`
        age = 3
        console.log(`my age is ${age}`)

        // string to number
        Number("1")
        +"1"
        -"1"

        // number to boolean
        // 0 and empty and '' is false, other is true
        Boolean(1) // true
        Boolean(0) // false
        !0  //true
        !!0 //false
        !!"" //false
        Boolean(undefined) //false
        Boolean(null)   //false
        Boolean(NaN)    //false
        Boolean({}) //true
        Boolean([]) //true

        // passing by value
        // 引用类型的时候: 比较的是引用的指向
        // 原始类型的时候: 比较的是值
        x = {}
        y = {}

        // 最不安全的做法
        x == y

        // 较安全的做法
        x === y
        // https://www.notion.so/Compare-value-in-JavaScript-d87cf0317c634376b3389e77758b085d
        // 最安全的做法
        Object.is(x,y)

        // notification
        alert("Something Wrong")

        // user input
        var x = prompt("Please input your name:")

        //
        function almostEqual(x,y) {
            return (x-y) < (10**(-7))
        }

        almostEqual(.1 + .1 + .1, .3)

        //检查type
        function getType(entity){
            var x = Object.prototype.toString.call(entity)
            return x.split(" ")[1].split(']')[0].toLowerCase()
        }

        function checkType(entity, type){
            return getType(entity) === type.toLowerCase()
        }

        function play(x){
    // return undefined
        }
        play() // undefined

        function play(x){
            return 1
        }

        //same with above
        play = (...arg) => {return arg}
        //same with above
        play = (...arg) => arg
        play(1)

        // varaible length of parameters
        function play(...arg){
        return arg
        }

        play(1,2,3,4,5,6,7)

        const y = 1 //定量，只能赋值一次
        let z = 1
        var x = 1//same with let

        ```

### 2D Array
```javascript
x = [
        [1,2,3,4],
        [4,5,6,7],
        [7,8,9,8]
]

for (let i=0;i< x.length; i++){
    for (let j=0; j< x[i].length; j++){
        console.log(x[i][j])
    }
}

for (item of x) {
    for (jtem of item) {
        console.log(jtem)
    }
}

// genenrate  2d array 10*10
y = []
for (let i=0; i< 10;i++) {
    temp = []
    for (let j=0; j<10; j++){
        temp[j] = j
    }
    y[i] = temp
}

console.log(y)
```

### loops
- for loop
```javascript
//第0，1，2，3。。。个
for(x in [4,1,3,5,6]){
  console.log(x) //0 1 2 3 4...
}

//第0，1，2，3。。。个里的值
for(x of [4,1,3,5,6]){
  console.log(x) //4 1 3 5 6
}

//最老的
for(let x = 0; x < 10; x++){
  console.log(x) // 1 2 3 4 ...9
}
```

- while
  ```javascript
  x=0
  while(x<10){
      console.log(x)
      x += 1 //x= 0 1 2 3 4...9
  }
  ```
### Map, filter, reduce 
```javascript
[1,2,3].map(x => x*2)
[1,2,3].reduce((sum, n) => sum + n)
[1,2,3].filter(x => x > 1)
```
### Destruct
```javascript
x = [1,2,3]
y = [...x,4]
//y=> 1,2,3,4

x = {
    a :1,
    b :2
}
y = {
    ...x,
    c :3
}
//y=> a:1 b:2 c:3

```
### debugger
- chrome/firefox -> `debugger`
- step in: 进入子函数
- step over: 跨过子函数
- step out: 从子函数出来
  
  ### Error Handling
```javascript
  function play() {
    throw Error("error happend")
}
try {
   play() 
    console.log('no error') // 没错到这行然后break
} catch {
   console.log('error')
}

console.log('end of line')
```

- [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

### Async
```javascript
async function asyncCall() {
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const x = async () => {
    await delay(2000) //2秒后运行
    console.log('x return')
}

const y = async () => {
    console.log('y')
}

x()
y()
```

### OOP
```javascript
class Animal {
    constructor(name) {
        this.name = name
 }
    
    run() {
        console.log('running')
    }
}


class Cat extends Animal {
    constructor(name, age) {
        super(name)
        this._age = age
    }
    
    run() {
        console.log('cat running')
    }
    
    meow () {
        console.log("miao")
    }
    
    get age() {
        return this._age
    }
    
    set age(age) {
        this._age = age
    }
    
    static log() {
        console.log('gan jb sha')
    }

 static get species() {
        return "cat"
 }
}


const cat = new Cat("nn",12)
console.log(Cat.species)
console.log(cat.age)
cat.age = 2
```


# Javascript with HTML and CSS
- ```document.getElementById("aaa").value```
  - means get the value in id called "aaa", 应用在读取
  
- ```document.getElementById("bbb").innerHTML = abc```
  - 把abc的内容转换为HTML格式

- ```var aaabbbccc = document.querySelector("#ccc").textContent```
- ```aaabbbccc += "!!!"```
- ```document.querySelector("#ccc").textContent = aaabbbccc```
  - 读取id为ccc中的内容并且 += ！！！

- in HTML: ```<script src="scipt.js"></script>```can place on the top if put the js code into ```dopcument.addEventListener("DOMContentLoaded, function(event){.......});```