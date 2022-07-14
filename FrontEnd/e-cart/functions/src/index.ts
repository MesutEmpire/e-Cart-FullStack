// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";

import {CallableContext} from "firebase-functions/lib/common/providers/https";
import {auth} from "firebase-admin";
import UserRecord = auth.UserRecord;

const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()


exports.addAdminRole = functions.https.onCall((data:any, context:CallableContext)=>{
    console.log(data)
    if(context.auth?.token.admin !== true && context.auth?.token.superuser !== true){
        return {error :'Only Admins and SuperUser can add other Admins'}
    }
    //get user and add custom claim(Admin)
    return admin.auth().getUserByEmail(data.email.email)
        .then((user:any)=>{
            console.log(`Success ${data.email} has been made Admin`)
             return admin.auth().setCustomUserClaims(user.uid,{
                admin : true
            })
        })
        .then((user:any)=>{
            console.log(user)
            console.log(data)
            console.log(context)
            console.log(`Success ${data.email} has been made Admin to store`)

            return admin.firestore().collection('users').doc(data.email.uid).update({
                userRights:{
                    superuser:false,
                    admin:true,
                    user:true,
                    dashboard:false,
                }
            })
                .then((success:any)=>{
                    console.log(`Success ${data.email} has been made to Firestore`)
                    return{
                        message:`Success ${data.email} has been made to Firestore`
                    }
                })
        })
        .catch((err:any) =>{
            return err
        })
})
exports.addSuperRole = functions.https.onCall((data:any, context:CallableContext)=>{
    if(context.auth?.token.superuser !== true){
        return {error :'Only SuperUser can add other SuperUsers'}
    }
    //get user and add custom claim(Admin)
    return admin.auth().getUserByEmail(data.email.email)
        .then((user:any)=>{
            return admin.auth().setCustomUserClaims(user.uid,{
                superuser : true
            })
        })

        .then(()=>{
            return admin.firestore().collection('users').doc(data.email.uid).update({
                userRights:{
                    superuser:true,
                    admin:true,
                    user:true,
                    dashboard:true,
                }
            })
                .then((user:any)=>{
                    return{
                        message : `Success ${data.email} has been made Superuser`
                    }
                })
        })
        .catch((err:any) =>{
            return err
        })
})

exports.deleteUser = functions.https.onCall((data:any, context:CallableContext)=>{
    if(context.auth?.token.superuser !== true){
        return {error :'Only SuperUser can add other SuperUsers'}
    }
    //get user and add custom claim(Admin)
    return admin.auth().deleteUser(data.uid)
        .then(() => {
            console.log('Successfully deleted user Auth');
        })
        .catch((error:any) => {
            console.log('Error deleting user:', error);
        });
})

exports.sendCurrentUserDetailsToStore = functions.auth.user().onCreate((user:UserRecord) => {
    console.log(user)
    console.log(user.displayName)


    return admin.firestore().collection('users').doc(user.uid).set({
        fullName : user.displayName,
        email: user.email,
        uid:user.uid,
        profilePhoto:user.photoURL,
        phoneNumber:0,
        created:user.metadata.creationTime,
        userRights:{
            superuser:false,
            admin:false,
            users:false,
            dashboard:false,
        }
    })

});



exports.signUp = functions.https.onCall((data:any, context:CallableContext)=>{
   return admin.auth().createUser({
            email: data.email,
            emailVerified: false,
            password: data.password,
            displayName: `${data.firstname} ${data.lastname} `,
            photoURL: data.photoUrl,
            disabled: false,
        })
        .then((userRecord:UserRecord) => {
            // // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully created new user:', userRecord.uid);
            console.log( userRecord);
           const  logIn = {
               email:data.email,
               password:data.password
           }
            return  logIn
        })
        .catch((error:any) => {
            console.log('Error creating new user:', error);
            return error
        });
})


exports.deleteUserInStore = functions.auth.user().onDelete((user:UserRecord) => {
    // ...
    return admin.firestore().collection('users').doc(user.uid).delete()
        .then(()=>{
            console.log("Successfully deleted user");
            return {data: "User deleted"}
        })
        .catch((err:any)=>{
            console.log('Error deleting user in Store:', err);
        return err
    })
});


exports.deleteMultipleUsers = functions.https.onCall((data:any, context:CallableContext)=>{
    if(context.auth?.token.superuser !== true){
        return {error :'Only SuperUser can delete Users'}
    }
    return admin.auth().deleteUsers(data.users)
        .then((deleteUsersResult:any) => {
            console.log(`Successfully deleted ${deleteUsersResult.successCount} users`);
            console.log(`Failed to delete ${deleteUsersResult.failureCount} users`);
            deleteUsersResult.errors.forEach((err:any) => {
                console.log(err.error.toJSON());
            });
        })
        .then(()=>{
            return data.users.forEach((uid : any)=>{
                admin.firestore().collection('users').doc(uid).delete()
                    .then(()=>{
                        console.log("Successfully deleted user");
                        return {data: "User deleted"}
                    })
                    .catch((err:any)=>{
                        console.log('Error deleting user in Store:', err);
                        return err
                    })
            })
        })
        .catch((error:any) => {
            console.log('Error deleting users:', error);
        });
})
