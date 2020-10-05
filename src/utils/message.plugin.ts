export default {
  install(Vue: any, options: any){
    Vue.prototype.$message = function(text: string) {
      // @ts-ignore
      M.toast({html: text, options: options})
    }
    Vue.prototype.$error = function(html:string) {
      // @ts-ignore
      M.toast({html: `[Ошибка]: ${html}`})
    }
  }
}