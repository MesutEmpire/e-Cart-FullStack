import { defineStore } from 'pinia'
import {functions} from "@/Firebase/config";
import { httpsCallable } from "firebase/functions";

export const  UserStore = defineStore('users', {
    state: ()=>({
        users : [],
        makeAdmin:false,
        userSelected:null,
        searchedUser:null,
        foundSearchedUser:null,
        deleteMultipleUsers : [],

    }),
    getters: {
        getUsers(state:any){
            if(state.foundSearchedUser){
                return state.foundSearchedUser
            }
                return state.users

        },
        getNumberOfUsers(state){
            return state.users.length
        },
        getMakeAdmin(state){
            return state.makeAdmin
        },
        getUserSelected(state){
            return state.userSelected
        }
    },
    actions: {
        showAllUsers(){
            const socket = new WebSocket('ws://localhost:5000/api/users/all')
            //listen to Connection
            socket.onopen=((event:Event)=>{
                console.log('Listener')
                console.log(event)
            })
            //listening to messages from the Server
            socket.onmessage = ({data})=>{
                this.users = JSON.parse(data)
                console.log(this.users)
                socket.send(`Received your data from the Client :${this.users}`);
            }

        },
        showMakeAdmin(payload:string){
            this.userSelected = payload
            this.makeAdmin = !this.makeAdmin
            if(this.makeAdmin == false){
                this.userSelected = null
            }

        },
        makeUserAdmin(payload:any){
            console.log(payload)
            fetch('http://localhost:5000/api/users/makeAdmin',{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
                body: JSON.stringify(payload)
            })
                .then((res:Response) => res.json())
                .then((res:any) => this.currentUser = res)
                .catch((err:any) =>{
                    console.log(err.message)
                })
    },
        makeSuperUser(payload:any){
            console.log(payload)
            const addSuperRole = httpsCallable(functions,'addSuperRole')
            addSuperRole({
                email : payload
            })
                .then((result)=>{

                    console.log(result.data)
                })
                .catch((error) => {
                    // Getting the Error details.
                    const code = error.code;
                    const message = error.message;
                    const details = error.details;
                    console.log(code)
                    console.log(message)
                    console.log(details)


                })

        },
        deleteThisUser(payload:string){
            console.log(payload)
            fetch('http://localhost:5000/api/users/deleteUser',{
                method:'DELETE',
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
                body: JSON.stringify({_id:payload})
            })
                .then((res:Response) => res.json())
                .then((res:any) => this.currentUser = res)
                .catch((err:any) =>{
                    console.log(err.message)
                })

        },
        searchUser(){
           if(this.searchedUser != null ){
               this.foundSearchedUser = this.users.filter((user:any) => `${user.firstname} ${user.lastname}`.toLowerCase().includes(this.searchedUser.toLowerCase())
               );
               console.log(this.foundSearchedUser)
               console.log(this.searchedUser)
           }
           },
        deleteMultipleUser(payload:[]){
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
                    .then((res:any) => this.currentUser = res)
                    .catch((err:any) =>{
                        console.log(err.message)
                    })

            }


        },
    }

})