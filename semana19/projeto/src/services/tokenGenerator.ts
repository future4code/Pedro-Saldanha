import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";

const expiresIn = "30min"

export const tokenGenerator = (data: authenticationData): string => {
  const token = jwt.sign(
    {
      id: data.id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}