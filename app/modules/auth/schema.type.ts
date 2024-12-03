export interface SignupRequestBody {
    password: string
    username: string,
    email: string,
    login?: string
}

export interface VerifyRequestBody {
    key: string
}

export interface LoginRequestBody {
    username: string,
    password: string,
    rememberMe: boolean
}