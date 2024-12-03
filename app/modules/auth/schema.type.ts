export interface SignupRequestBody {
    password: string
    username: string,
    email: string,
    login?: string
}

export interface VerifyRequestBody { 
    key:string
 }