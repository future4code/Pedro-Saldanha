import { Request, Response } from "express"
import app from "./app";
import connection from "./connection";

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0]
}

const countActorByGender = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    return result[0]
}
// Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });

getActorByName("Lázaro Ramos").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});

countActorByGender("male").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});
// Assim a chamada funciona fora dos endpoints com await
// (async () => {
//     console.log(await getActorById("001"))
// })()


// Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id

//         console.log(await getActorById(id))

//         res.end()
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })
 // bata no http://localhost:3003/users/001 e veja o que acontece no terminal