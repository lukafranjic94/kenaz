import { Injectable } from '@angular/core';
import { IRawCategory } from 'src/app/interfaces/category.interface';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Array<IRawCategory> = [
    {
      id: '1',
      name: 'Business',
    },
    {
      id: '2',
      name: 'Sport',
    },
  ];

  constructor() {}

  private getCategories(): Array<Category> {
    return this.categories.map((rawCategory) => new Category(rawCategory));
  }

  public getCategory(categoryId: string): Category | undefined {
    return this.getCategories().find((category) => category.id === categoryId);
  }
}
