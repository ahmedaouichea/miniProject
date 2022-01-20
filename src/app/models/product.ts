export class Product {
  id:number;
  name:string;
  description:string;
  price:number;
  tag ?: string[];
  constructor(id:number,name:string,description:string,price:number,tag ?: string[]){
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.tag=tag;
  }
}
