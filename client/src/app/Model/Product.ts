import { IProduct } from './IProduct';

export class Product implements IProduct {
  constructor(
    public id: number,
    public title: string,
    public category: string,
    public price: number,
    public description?: string
  ) {
  }
}
