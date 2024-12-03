import { api } from "_api";
import { useCustomMutation } from "hooks";
import { authEndpoints, AuthEndpointsType } from "./endpoints";
import { useSignUp } from "views/Login/components/hooks";

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
        mutationFn: (data) => api.get(authEndpoints.VERIFY, {params:data}),
        mutationKey: ['Verify-Code'],
        onError: (errData) => {
            alert(errData.response?.data.detail)
        },
        onSuccess: ({ }, {key }) => {
            alert('Account Successfully Verified.Now You Can Login')
            dispatch({step:1})

        }
    })
}