## window is not defined 

There is no window object on the server side rendering side. But the quick fix is to check process.browser.
```
  created(){
    if (process.browser){
      console.log(window.innerWidth, window.innerHeight);
    }
  }
```