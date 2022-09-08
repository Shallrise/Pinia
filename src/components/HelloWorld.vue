<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useStore} from '../store/index'

const mainStore = useStore()

/**把解构出的数据做ref响应式代理 */
const {count,foo} = storeToRefs(mainStore)

const handleChangeState = () =>{
    //方式一：
    // mainStore.count++

    //方式二：$patch批量更新
    // mainStore.$patch({
    //     count:mainStore.count + 1,
    //     foo:'gun',
    //     arr:[...mainStore.arr,4]
    // })

    //方式三：
    // mainStore.$patch(state=>{
    //     state.count++,
    //     state.foo='hello',
    //     state.arr.push(4)
    // })

    //方式四：封装到action中做处理
    mainStore.handleChangeState(2)

}
console.log(mainStore.count);

</script>

<template>
 <p>{{mainStore.count}}</p>
 <p>{{mainStore.foo}}</p>
 <p>{{mainStore.arr }}</p>
 <p>{{mainStore.count10}}</p>
 <hr>
 <p>{{count}}</p>
 <p>{{foo}}</p>
 <hr>
 <p>
     <button @click="handleChangeState">+1</button>
 </p>
</template>


