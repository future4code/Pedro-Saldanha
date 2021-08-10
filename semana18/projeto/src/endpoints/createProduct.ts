import { Request, Response } from "express"
import insertProduct from "../data/insertProduct"
import { Product } from "../entities/Product"


export const createProduct = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.body.name || !req.body.description || !req.body.price) {
            res.status(400).send("Os campos 'nome', 'descrição' e 'preço' precisam ser preenchidos.")
        }
        
        const tempProduct:Product = new Product(
            req.body.name,
            req.body.description,
            req.body.price
        )
        
        const newProduct = tempProduct.getProduct()

        await insertProduct(
            newProduct.id,
            newProduct.name, 
            newProduct.description,
            newProduct.price
        )

        res.status(200).send({message:"Produto adicionado com sucesso."})


    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}