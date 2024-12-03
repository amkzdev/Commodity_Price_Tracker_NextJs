import { ApiMutateRequestType } from "@types"
import { SignupRequestBody } from "./schema.type"

export const authEndpoints = {
    SIGNUP: `/api/register`,
    VERIFY: "/api/activate",

}


export interface AuthEndpointsType {
    SIGNUP: ApiMutateRequestType<SignupRequestBody>,
    VERIFY: ApiMutateRequestType<{ key: string }>
}
