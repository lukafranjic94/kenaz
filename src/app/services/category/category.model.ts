import { IRawCategory } from 'src/app/interfaces/category.interface';

export class Category {
  public id: string;
  public name: string;

  constructor(rawCategory: IRawCategory) {
    this.id = rawCategory.id;
    this.name = rawCategory.name;
  }
}
