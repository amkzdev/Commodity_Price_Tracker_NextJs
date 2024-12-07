import { api } from "_api";
import { useAuth, useCustomMutation } from "hooks";
import { authEndpoints, AuthEndpointsType } from "./endpoints";
import { useSignUp } from "views/Login/components/hooks";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const useMutateSignup = () => {

    const { dispatch } = useSignUp()
    return useCustomMutation<AuthEndpointsType['SIGNUP']>({
        mutationFn: (data) => api.post(authEndpoints.SIGNUP, data),
        mutationKey: ['Signup'],
        onError: (errData) => {
            alert(errData.response?.data.detail)
        },
        onSuccess: ({ }, { email }) => {
            alert('Verify Code Has Sent To Your Email')
            dispatch({ step: 2, email })

        }
    })
}

export const useMutateVerify = () => {

    const { dispatch } = useSignUp()

    return useCustomMutation<AuthEndpointsType['VERIFY']>({
        mutationFn: (data) => api.get(authEndpoints.VERIFY, { params: data }),
        mutationKey: ['Verify-Code'],
        onError: (errData) => {
            alert(errData.response?.data.detail)
        },
        onSuccess: ({ }, { key }) => {
            alert('Account Successfully Verified.Now You Can Login')
            dispatch({ step: 1 })

        }
    })
}


export const useMutateLogin = () => {

    const router = useRouter()

    const { dispatch } = useAuth()



    return useCustomMutation<AuthEndpointsType['LOGIN']>({
        mutationFn: (data) => api.post(authEndpoints.LOGIN, data),
        mutationKey: ['Login'],
        onError: (errData) => {
            alert(errData.response?.data.detail)
        },
        onSuccess: ({ data: { id_token } }) => {
            setCookie('access_token', id_token, { maxAge: 60 * 60 * 24 })
            dispatch({ isLoggedIn: true })
            router.push('/dashboard')
            alert('You Have Successfully Logged in')

        }
    })
}