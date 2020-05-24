import * as express from 'express';
import { IProduct } from './IProduct';
const app = express();

class Product implements IProduct {
  constructor(
    public id: number,
    public title: string,
    public category: string,
    public price: number,
    public description?: string
  ) {}
}

const products = [
  new Product(1, 'IPhone X', 'Phones', 1000, ''),
  new Product(2, 'Samsung X', 'Phones', 900, ''),
  new Product(3, 'IPhone XR', 'Phones', 950, '')
]

function getProducts(): Product[] {
  return products;
}

app.get('/', (req, res) => res.send('Goto /products'));
app.get('/products', (req, res) => res.json(getProducts()));

const server = app.listen(8080, 'localhost');
