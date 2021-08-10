import { Request, Response } from "express";
import fetchTable from "../data/fetchTable";
import { Product } from "../entities/Product";


export const getProducts = async (req: Request, res: Response) => {

    try {

        const result = await fetchTable('product')

        if(result.length <= 0){
            throw new Error("Produtos não encontrados");
            
        }

        const products: Product[]  = result.map((product: any) => {
            return {
                name: product.name,
                description: product.description,
                price: product.price
            }
        })


        res.status(200).send(products)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}