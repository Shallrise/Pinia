import { defineStore } from "pinia";
import { IProduct,getProducts } from "../api/shop";

export const useProductStore = defineStore('products',{
    state:() =>{
        return{
            all:[] as IProduct[]
        }
    },

    getters:{},

    actions:{
        async loadAllProducts(){
            const ret = await getProducts()
            this.all = ret
        },
        decrementProduct(product:IProduct){
            const ret = this.all.find(item => item.id === product.id)
            if(ret){
                ret.inventory--
            }
        }
    }
})