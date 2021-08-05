### Exercício 1
* a) não seria possível pois ela é privada e não há nenhum método público que imprima a senha.
* b) uma vez, pois foi criada apenas uma instância dessa classe.
### Exercício 2
* a) Uma vez, pois apenas uma instância dessa classe foi criada.
* b) Duas, pois já havia uma instância de User criada anteriormente e a instância de Customer criada nesse exercício é também uma instância User, já que é uma subclasse de User, logo há duas instâncias User.
### Exercício 3
* a) Não pois o password é uma propriedade privada dentro da classe User não há nenhum método público que o imprima.
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
