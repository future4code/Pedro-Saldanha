import { Request, Response } from "express"
import app from "./app";
import connection from "./connection";

// Esse arquivo seria o index.ts
// exercício 1
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}

const getActors = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor;
    `)
    return result[0]
}

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0]
}

const countActorByGender = async (gender: string): Promise<any> => {
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

getActors().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
});

// getActorByName("Lázaro Ramos").then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// });

// countActorByGender("male").then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// });
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

//  exercício 2
const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");
};

const updateSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary
        })
        .where({
            id
        })

}

// updateSalary("003", 500000).then((res) => {
//     console.log("Salário atualizado")
// }).catch((err) => {
//     console.log(err)
// });

const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where({
            id
        })
}

// deleteActor("004")
//     .then((res) => {
//         console.log("Ator deletado")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

const salaryAverageByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({
            gender
        })
    return result[0]
}

salaryAverageByGender("male").then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// exercício 3
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send(error.message)
    }

})

app.get("/actor", async(req:Request, res:Response)=>{
    try {
        const gender = req.query.gender as string
        const count = await countActorByGender(gender)

        res.status(200).send(count)
    } catch (error) {
        res.status(400).send(error.message)
    }
})