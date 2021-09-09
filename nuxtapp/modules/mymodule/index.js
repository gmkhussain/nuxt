export default function mymodule(moduleOptions) {
   
    // console.log(moduleOptions.token) // '123'
    // console.log(this.options.exampleMsg) // 'hello'
  
    // this.nuxt.hook('ready', async nuxt => {
    //   console.log('Nuxt is ready')
    // })
    const { nuxt } = this
    
    this.nuxt.hook('render:before', renderer => {
      console.log(nuxt.options)
      // Called after the renderer was created
    })
    
  }

  //  module.exports.meta = require('./package.json')