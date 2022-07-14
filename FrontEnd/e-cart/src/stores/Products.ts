import { defineStore } from 'pinia'
import {IFoodForm} from "@/Structure/struct";

export const  ProductStore = defineStore('products', {
    state: ()=>({
        products : [],
        productForm : {
            title: null,
            price: null,
            time: null,
            rating: null,
            img: null,
        } as IFoodForm
    }),
    getters: {
        getProducts(state){
            return state.products
        },
        getNumberOfProducts(state){
            // if (state.products.length == 0 ){
            //     return null
            // }
            // else{
            //     return state.products.length
            // }
            return state.products.length
        },
    },
    actions: {
        fetchProducts(){
            fetch('http://localhost:4000/api/products')
                .then((res:Response)=>res.json() )
                .then((res)=> {
                    this.products = res
                    console.log( this.products)
                })
        },
        addNewProduct(){
            console.log(this.productForm)
            console.log(this.productForm.img)
            // add file to FormData object
            const fd = new FormData();
            fd.append('title', this.productForm.title);
            fd.append('price', this.productForm.price);
            fd.append('time', this.productForm.time);
            fd.append('rating', this.productForm.rating);
            fd.append('img', this.productForm.img);




            fetch(
                `http://localhost:4000/api/products`,
                {
                    method: 'POST',
                    body: fd
                }
            )
                .then((res:Response) => res.json())
                .then((res:Response)=> console.log(res))
                .catch((err)=>{
                console.log(err)
            })

        },


    }

})