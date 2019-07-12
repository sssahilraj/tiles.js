# TILES JS
*Give tile effect to your images*

## USAGE:
* Wrap your each images inside a div
* assign a classname to all the images and wrapper div
* Call tiles.js or tiles.min.js to your script
* create an instance of object TilesEffect in script
* select both the classes in script and pass them to instance of the object

**Example**
```html
<body>
    <div class="tiles-wrapper">
        <img src="demo.jpg" class="tiles-img">
    </div> 
     <div class="tiles-wrapper">
        <img src="demo2.jpg" class="tiles-img">
    </div>
</body>
<script src="tiles.js-1.0/tiles.min.js"></script>
<script>
var wrapper=document.getElementsByClassName('tiles-wrapper');
var img=document.getElementsByClassName('tiles-img');
    var TilesEffect=new TilesEffect(wrapper,img);
</script>
</html>

```

## INSTRUCTION:
* we will set the width of the wrapper div containing images and not the images itself
* no need to set height.It is in ratio to width

**Example:**
```html
<style>
 .tiles-wrapper{
     width:400px;
 }
</style>
```

**FINAL EXAMPLE**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    .tiles-wrapper{
       width:400px;
    }
    </style>
</head>
<body>
    <div class="tiles-wrapper">
        <img src="demo.jpg" class="tiles-img">
    </div> 
     <div class="tiles-wrapper">
        <img src="demo2.jpg" class="tiles-img">
    </div>
</body>
<script src="tiles.js-1.0/tiles.min.js"></script>
<script>
var wrapper=document.getElementsByClassName('tiles-wrapper');
var img=document.getElementsByClassName('tiles-img');
    var TilesEffect=new TilesEffect(wrapper,img);
</script>
</html>
```
