import { defineStore } from "pinia";
import { IProduct,buyProducts } from "../api/shop";
import {useProductStore} from './product'

//id,title,price,quantity
type CartProduct = {
    quantity:number
}& Omit<IProduct,'inventory'>

export const useCartStore = defineStore('cart',{
    state:()=>{
        return{
            cartProducts:[] as CartProduct[],//购物车商品列表
            checkoutStaus:null as null | string
        }
    },
    
    getters:{
        totlePrice(state){
            return state.cartProducts.reduce((totle,item)=>{
                return totle + item.price * item.quantity
            },0)
        }
    },

    actions:{
        addProductToCart(product:IProduct){
            console.log('addProductToCart',product);
            //看商品有没有库存
            if(product.inventory < 1){
                return
            }
            //检测购物车中是否已有该商品
            const cartItem = this.cartProducts.find(item => item.id === product.id)
            if(cartItem){
                //如果有则让商品的数量+1
                cartItem.quantity++
            }else{
                //如果没有则添加到购物车列表中
                this.cartProducts.push({
                    id:product.id,
                    title:product.title,
                    price:product.price,
                    quantity:1,
                })
            }
            // product.inventory--;
            //更新商品的库存
            const productsStore = useProductStore()
            productsStore.decrementProduct(product)
        },
        async checkout(){
            const ret = await buyProducts()
            this.checkoutStaus = ret ? '成功' :'失败'
            if(ret){
                this.cartProducts=[]
            }
        }
    }
})