# HTML

## block and inline
### Block (have space / start at new line):
- div 
- h1
- p
- section
- ...
### inline (no space):
- span 
- button
- input
- ...
  
##  Each page can have 3 div:
- header
- body
- footer

## lists
  unorder list (ul) and order list(ol)
```HTML
<ul>
    <li>list1</li>
    <li>list2</li>
    <li>list2</li>
</ul>
```

## display
- use "$lt;" -- to display "<"
- use "$gt;" -- to display ">"
- use "$amp;" -- to display "&"
- use "$copy;" the next letter @
- none breaking space "$nbsp;"
- 不同的字体可能导致乱码: "$quot;" 

## links
```html
<a href="www.facebook.com" target="_blank" title="鼠标放在上面显示的标签">click here</a>
```
- href can use for: 
  - html
  - www.xxx.com
  - id name (use to jump or go back to top)
- target(打开方式):
  - _black
  - _self
  - _parent
  - _top

## image
```html
<imag src="abc.jpg" width="100px" height="100px"></imag>
```
### src:
- .jpg
- website(www.abc.com/abc.jpg)
