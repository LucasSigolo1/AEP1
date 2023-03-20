import { Request, Response } from 'express'
import productService from '../service/productService'

class ProductController{

    async create(req: Request, res: Response){
        await productService.createProductList(req.body)
        return res.status(201).send()
    }

    async getList(req: Request, res: Response) {
        const productLista = res.json(await productService.listProducts())
        return productLista
    }

    async productGetStock(req: Request, res: Response) {
        const productStock = res.json(await productService.getStock())
        return productStock
    }
}

export default new ProductController()