## window is not defined 

There is no window object on the server side rendering side. But the quick fix is to check process.browser.
```
  created(){
    if (process.browser){
      console.log(window.innerWidth, window.innerHeight);
    }
  }
```


## Caching

Specify the props passed to <keep-alive> by passing a prop keep-alive-props to the <nuxt>  component.
```<nuxt keep-alive :keep-alive-props="{ max: 10 }" />```
Keeps only 10 page components in memory.


## Ignoring pages
by prefixing them with a -
example: -filename.vue
