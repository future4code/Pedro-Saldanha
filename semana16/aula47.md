### Exercício 1
* a) Quando usamos o raw a resposta é como ele retorna a resposta completa que o MySQL gera, vindo com informações que não queremos. A tabela específica fica armazenada em um array no índice [0], logo usamos result[0] por conta disso.
* b) 
```
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0]
}
```
* c)
```
const countActorByGender = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    `)
    return result[0]
}
```
### Exercício 2
* a) 
```
  const updateSalary = async (id: string, salary: number): Promise<any> => {
      await connection("Actor")
      .update({
          salary
      })
      .where({
        id
      })
  }
```
* b) 
```
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where({
            id
        })
}
```
* c)
```
const salaryAverageByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({
            gender
        })
        return result[0]
}
```

### Exercício 3
* a) 
```
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send(error.message)
    }

})
```
* b) 
```
app.get("/actor", async(req:Request, res:Response)=>{
    try {
        const gender = req.query.gender as string
        const count = await countActorByGender(gender)

        res.status(200).send(count)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
```
### Exercício 4
* a)
```
app.put("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalary(req.body.id, req.body.salary);

        res.status(200).send("Salário Atualizado")
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
})
```
* b) 
```
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id);

        res.status(200).send("Ator deletado")
        
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
})

```
