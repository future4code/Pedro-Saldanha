import { authenticationData } from "../model/User"
import * as jwt from "jsonwebtoken"

export class TokenManager {
    generate(
        payload: authenticationData
    ): string {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }
        )
    }

    getData(
        token: string
    ): authenticationData {
        const result: any = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )

        return { id: result.id, }
    }
}

