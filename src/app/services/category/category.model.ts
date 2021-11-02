import { IRawCategory } from 'src/app/interfaces/raw-category';

export class Category {
  public id: string;
  public name: string;

  constructor(rawCategory: IRawCategory) {
    this.id = rawCategory.id;
    this.name = rawCategory.name;
  }
}
