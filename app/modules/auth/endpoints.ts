import { ApiMutateRequestType } from "@types"
import { LoginRequestBody, LoginSuccessResponse, SignupRequestBody } from "./schema.type"

export const authEndpoints = {
    SIGNUP: `/api/register`,
    VERIFY: "/api/activate",
    LOGIN:'/api/authenticate'

}


export interface AuthEndpointsType {
    SIGNUP: ApiMutateRequestType<SignupRequestBody>,
    VERIFY: ApiMutateRequestType<{ key: string }>,
    LOGIN:ApiMutateRequestType<LoginRequestBody,LoginSuccessResponse>
}
