### Exercício 1
* a) não seria possível pois ela é privada e não há nenhum método público que imprima a senha.
* b) uma vez, pois foi criada apenas uma instância dessa classe.
### Exercício 2
* a) Uma vez, pois apenas uma instância dessa classe foi criada.
* b) Duas, pois já havia uma instância de User criada anteriormente e a instância de Customer criada nesse exercício é também uma instância User, já que é uma subclasse de User, logo há duas instâncias User.
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
