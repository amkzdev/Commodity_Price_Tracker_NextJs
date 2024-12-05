export interface SignupRequestBody {
    password: string
    username: string,
    email: string,
    login?: string,
    langKey: 'en'
}

export interface VerifyRequestBody {
    key: string
}

export interface LoginRequestBody {
    username: string,
    password: string,
    rememberMe: boolean
}

export interface LoginSuccessResponse {
    id_token: string
}