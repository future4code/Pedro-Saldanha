import connection from "../connection";
import { user } from "../types";

export const addUser = async (user: user) => {
    await connection
      .insert({
        id: user.id,
        email: user.email,
        password: user.password,
      })
      .into('aula_55_users');
  };