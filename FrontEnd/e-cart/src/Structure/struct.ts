export interface UserSignUp {
    firstname: string,
    lastname: string,
    phoneNumber: number | null,
    email:string,
    password: string,
    confirmPassword: string,
    level:string
}
export interface IUsers{
    email: string
    firstname: string
    id: string
    lastname: string
    password: string
    phoneNumber: number |string
}
export interface IProductForm {
    title: string | any,
    price: string | any ,
    // time: string | any,
    merchant:string | any,
    category:string | any,
    description:string | any,
    img: any | null,
}

export type ISearchProduct = null | string
