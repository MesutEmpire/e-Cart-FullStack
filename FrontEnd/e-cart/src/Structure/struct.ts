export interface UserSignUp {
    firstname: string,
    lastname: string,
    phoneNumber: number | null,
    email:string,
    password: string,
    confirmPassword: string,
}
export interface IUsers{
    email: string
    firstname: string
    id: string
    lastname: string
    password: string
    phoneNumber: number |string
}
export interface IFoodForm {
    title: string | any,
    price: string | any ,
    time: string | any,
    rating: string | any,
    img: any | null,
}