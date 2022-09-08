<template>
    <ul>
        <li v-for="item in productsStore.all">
            {{item.title}} - {{item.price}}
            <br/>
            <button
                :disabled="!item.inventory"
                @click="cartStore.addProductToCart(item)">添加到购物车</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import {useProductStore} from '../store/product'
import {useCartStore} from '../store/cart'
const productsStore = useProductStore()
const cartStore = useCartStore()

//加载所有数据
productsStore.loadAllProducts()
</script>
