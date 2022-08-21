import { defineStore } from 'pinia'
import {IProductForm, ISearchProduct} from "@/Structure/struct";
import {UserAuthStore} from "@/stores/UserAuth";

export const  ProductStore = defineStore('products', {
    state: ()=>({
        products : [],
        productForm : {
            title: null,
            price: null,
            // time: null,
            merchant:null,
            category:null,
            description:null,
            img: null,
        } as IProductForm,
        searchedProduct: ''  as ISearchProduct,
        foundSearchedProduct:null,
        deleteMultipleProducts : [],

    }),
    getters: {
        getProducts(state){
            if(state.foundSearchedProduct){
                return state.foundSearchedProduct
            }
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
            // fetch('http://localhost:4000/api/products')
            //     .then((res:Response)=>res.json() )
            //     .then((res)=> {
            //         this.products = res
            //         console.log( this.products)
            //     })

            const socket = new WebSocket('ws://localhost:4000/api/products/all')
            //listen to Connection
            socket.onopen=((event:Event)=>{
                console.log('Connection opened')
                console.log(event)
            })
            //listening to messages from the Server
            socket.onmessage = ({data})=>{
                this.products = JSON.parse(data)
                console.log(this.products)
                socket.send(`Received your data from the Client :${this.products}`);
            }
        },
        addNewProduct(){
            const userAuth = UserAuthStore()
            this.productForm.merchant = userAuth.getCurrentUser.fullName
            console.log(this.productForm)
            console.log(this.productForm.merchant)
            console.log(this.productForm.img)
            // add file to FormData object
            const fd = new FormData();
            fd.append('title', this.productForm.title);
            fd.append('price', this.productForm.price);
            fd.append('merchant', this.productForm.merchant);
            fd.append('category', this.productForm.category);
            fd.append('description', this.productForm.description);
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
        searchProduct(){
            console.log(this.searchedProduct)
            console.log(typeof(this.searchedProduct))
            if(this.searchedProduct != null ){
                this.foundSearchedProduct = this.products.filter((product:any) => `${product.title}`.toLowerCase().includes(this.searchedProduct.toLowerCase()));
            }
        },
        deleteThisProduct(payload:string){
            console.log(payload)
            fetch('http://localhost:5000/api/products',{
                method:'DELETE',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
                body: JSON.stringify({_id:payload})
            })
                .then((res:Response) => res.json())
                // .then((res:any) => this.currentUser = res)
                .catch((err:any) =>{
                    console.log(err.message)
                })

        },
        deleteMultipleProduct(payload:[]){
            console.log(payload)
            console.log(payload.length)
            if(payload.length > 0 ){
                fetch('http://localhost:5000/api/users/deleteMultiple',{
                    method:'DELETE',
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include',
                    body: JSON.stringify(payload)
                })
                    .then((res:Response) => res.json())
                    // .then((res:any) => this.currentUser = res)
                    .catch((err:any) =>{
                        console.log(err.message)
                    })

            }


        },

    }

})