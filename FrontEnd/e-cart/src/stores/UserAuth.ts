import { UserSignUp} from "@/Structure/struct";
import { defineStore } from 'pinia'

import router from "@/router";
export const  UserAuthStore = defineStore('userAuth', {
    state: () => ({
        user: null,
        authIsReady: false,
        authError: null,
        signInForm: {
            firstname: "",
            lastname: "",
            phoneNumber: null,
            email: "",
            password: "",
            confirmPassword: "",
            level:"User"
        } as UserSignUp,
        userAdmin : false,
        userSuper:false,
        currentUser:JSON.parse(localStorage.getItem('currentUser')!),
    }),
    getters: {
        getUser(state) {
            return state.user
        },
        getUserAdmin(state) {
            return state.userAdmin
        },
        getUserSuper(state) {
            return state.userSuper
        },
        getAuthIsReady(state) {
            return state.authIsReady
        },
        getCurrentUser(state) {
            return state.currentUser
        },
        getAuthError(state) {
            return state.authError
        },

    },
    actions: {
        signUp() {
      fetch('http://localhost:3000/api/auth/signup',{
          method:'POST',
          headers: {'Content-Type':'application/json'},
          credentials: 'include',
          body: JSON.stringify(this.signInForm)
      })
          .then((res:Response) => res.json())
          .then((res:any) => {
              this.resetForm()
              this.currentUser = res
              localStorage.setItem('currentUser', JSON.stringify(res));
              console.log("User",this.currentUser)
          })
          .then(()=>{
              router.push('/SuperUser/')
          })

          .catch((err:any) =>{
              console.log(err.message)
          })

        },
        logIn() {
            fetch('http://localhost:3000/api/auth/login',{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
                body: JSON.stringify({email:this.signInForm.email, password:this.signInForm.password})
            })
                .then((res:Response) => res.json())
                .then((res:any) => {
                    this.resetForm()
                    this.currentUser = res
                    localStorage.setItem('currentUser', JSON.stringify(res));
                    console.log("User",this.currentUser)
                })
                .then(()=>{
                    router.push('/SuperUser/')
                })
                .catch((err:any) =>{
                    console.log(err.message)
                })
        },
        logOut() {
            // signOut(auth)
            //     .then(res => {
            //             this.user = null
            //              this.userAdmin = false
            //             router.push('/')
            //         }
            //     )
            //     .catch(err => this.authError = err.message)
            fetch('http://localhost:3000/api/auth/logout',{
                method:'GET',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
            })
                .then((res:Response) => res.json())
                .then((res:any) => {
                    console.log(res)
                    this.currentUser = null
                    localStorage.removeItem('currentUser');
                    router.push('/')
                })
                .catch((err:any) =>{
                    console.log(err.message)
                })
        },
        authUser(){
            return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/api/auth/authUser',{
                method:'GET',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
            })
                .then((res:Response) =>
                    {
                        if(res.status == 200){
                            res.json()
                        }
                        else {
                            throw Error("Not 200")
                        }
                    }

                )
                .then((res:any) => {
                    console.log(res)
                    resolve(true)

                })
                .catch((err:any) =>{
                    console.log(err.message)
                    reject(err.message)
                })
        })
        },
        authAdmin(){
            return new Promise((resolve, reject) => {
                fetch('http://localhost:3000/api/auth/authAdmin',{
                    method:'GET',
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include',
                })
                    .then((res:Response) =>
                        {
                            if(res.status == 200){
                                res.json()
                            }
                            else {
                                throw Error("Not 200")
                            }
                        }

                    )
                    .then((res:any) => {
                        console.log(res)
                        resolve(true)

                    })
                    .catch((err:any) =>{
                        console.log(err.message)
                        reject(err.message)
                    })
            })
        },
        authSuper(){
            return new Promise((resolve, reject) => {
                fetch('http://localhost:3000/api/auth/authSuper',{
                    method:'GET',
                    headers: {'Content-Type':'application/json'},
                    credentials: 'include',
                })
                    .then((res:Response) =>
                        {
                            if(res.status == 200){
                                res.json()
                            }
                            else {
                                throw Error("Not 200")
                            }
                        }

                    )
                    .then((res:any) => {
                        console.log(res)
                        resolve(true)

                    })
                    .catch((err:any) =>{
                        console.log(err.message)
                        reject(err.message)
                    })
            })
        },
        resetForm(){
            this.signInForm.firstname= "",
                this.signInForm.lastname= "",
                this.signInForm.phoneNumber= null,
                this.signInForm.email= "",
                this.signInForm.password= "",
                this.signInForm.confirmPassword= "",
                this.signInForm.level="User"
        }





        //
        //
        // authState() {
        //     onAuthStateChanged(auth,(user:any) => {
        //         user?.getIdTokenResult()
        //             .then((idTokenResult:any) =>{
        //                 this.userAdmin = false
        //                 this.userSuper = false
        //
        //                 if(idTokenResult.claims.superuser == true){
        //                    this.userSuper = true
        //                 }
        //                 else if(idTokenResult.claims.admin == true){
        //                     this.userAdmin = true
        //                 }
        //
        //             })
        //             .then(()=>{
        //                 console.log(this.userAdmin,this.userSuper )
        //             })
        //         this.authIsReady = true
        //         this.user = user
        //
        //     })
        // },
   }
})
