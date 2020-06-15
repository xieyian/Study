# CSS

## id and class
- id: #
- class: .


## Selector
- Element with class selector
  - 选择div中的classname
  - ```div.classname {} ``` 
  
- Child selector 
  - 选择下一层的classname (只有一层)
  - ```div > classname {} ```
  
- Descendant selector 
  - 选择一下所有层的class
  - ```div classname {}```


## Pseudo-Class Selector (div : nth-child)
- :link
- :visited
- :hover
- :active 
- div:nth-child(...) 第...个div

## color: red !important; // 变为红色

## content padding margin
```html
width: 100px;
box-sizing: border-box; //整个盒子的长度为100px
box-sizing: content-box; //盒子中的字的的长度为100px
```
- box-sizing 不能继承，只能放在 * {box-sizing} 中更改
- margin-bottom:10 与下面的 margin-top:20 中间间距为大的数据: 20
- overflow: auto; //有冲突或者多出来的字。。
- background: url(photo.jpg) no-repeat top left(左上方); 

## float and clear
```html
float: left;
clear: left/right/both;
```
## position
从上下左右往外侧移动100px
```HTML
position: absolute;
top/bottom/left/right: 100px; 
```
when using absolute, set parent to:
- ```position: relative;```

## Media Queries
大于100px时运行
- ```@media (min-width: 100px) {...}```

比100小或者200大时运行 
- ```@media (min-width: 100px), (max-width: 200px) {...}```

在100到200之间是运行
- ```@media (min-width: 100px) and (max-width: 200px) {...}```
  
- 手机版和浏览器版的width不一样，为了确保一致，添加：
  - ```<meta name="viewport" content="width=device-width, initial-scale=1">```
  
## Bootstrap
## SASS

## Flex
