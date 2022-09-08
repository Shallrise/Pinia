<template>
    <div class="cart">
        <h2>你的购物车</h2>
        <p>
            <i>请添加一些商品到购物车</i>
        </p>
        <ul>
            <li v-for="item in cartStore.cartProducts">
                {{item.title}} - {{item.price}} * {{item.quantity}}</li>
        </ul>
        <p>商品总价：{{cartStore.totlePrice}}</p>
        <p>
            <button @click="cartStore.checkout">结算</button>
        </p>
        <p v-show="cartStore.checkoutStaus">结算{{cartStore.checkoutStaus}}</p>
    </div>
</template>

<script setup lang="ts">
import {useCartStore} from '../store/cart'
const cartStore = useCartStore()
</script>