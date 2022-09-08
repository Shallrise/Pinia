import {defineStore} from 'pinia'

export const useStore = defineStore('main',{
    /*类似与组件中的data,用于存储全局状态管理 */
    state:()=>{
        return{
            count:100,
            foo:'bar',
            arr:[1,2,3]
        }
    },
    /*类似于组件中的computed,用于封装组件，具有缓存的功能 */
    getters:{
        // count10(state){
        //     return state.count+10
        // }

        //使用this必须手动书写参数类型，否则无法推断类型报出错误
        count10():number{
            return this.count+10
        }
    },
    /*类似于组件中的methods,封装业务逻辑，修改state */
    actions:{
        handleChangeState(num:number){
            this.count += num
            this.foo='hello'
            this.arr.push(4)
        }
    }
})