export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('_multi', msg => console.log(`_multi ${msg*2}!`))
  }
  