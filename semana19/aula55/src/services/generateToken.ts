import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

const expiresIn = "10min"

export const generateToken = (data: authenticationData): string => {
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