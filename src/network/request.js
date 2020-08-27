import axios from 'axios'

// 1.方法一
// export function request(config,success,failure){
//   //参数的解释:  config:关于axios请求的配置  success:请求成功时调用的函数 failure:请求失败时调用的函数
//   const instance1 = axios.create({
//     baseURL:'http://152.136.185.210:8000/api/z8'
//   })

//   instance1(config)
//   .then(res => {
//     success(res)
//   })
//   .catch(error =>{
//     failure(error)
//   })
// }


// 2.方法二 返回一个Promise
// export function request (config){
//   return new Promise ((resolve,reject) => {
//     const instance1 = axios.create({
//       baseURL:'http://152.136.185.210:8000/api/z8'
//     })
//     instance1(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(error =>{
//       reject(error)
//     })
//   })
// }

// 3.方法三 直接将创建的实例返回
export function request (config){
    //  1.创建axios实例
    const instance1 = axios.create({
      baseURL:'http://152.136.185.210:8000/api/z8'
    })

    //  2.axios的拦截器,如果对发送请求拦截不返回，则只会执行catch()函数
    // axios.interceptors(全局拦截器)
    // instance1.interceptors.request.use()  对发送请求就行拦截
    // instance1.interceptors.response.use() 对请求得到后进行拦截
    //  2.1请求拦截
    // instance1.interceptors.request.use(
    //   res => {
    //     console.log("请求成功并拦截====>",res)
    //     return res
    //   },
    //   error => {
    //     console.log("请求失败并拦截====>",error)
    //   }
    // )

    // //  2.2响应拦截
    instance1.interceptors.response.use(
      res => {
        return res.data
      },
      error => {
        console.log("请求响应失败===>")
      }
    )



    // 3.返回实例
    return instance1(config)
}
