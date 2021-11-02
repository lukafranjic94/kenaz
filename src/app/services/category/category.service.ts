import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { IRawCategory } from 'src/app/interfaces/raw-category';
import { ApiPaths, environment } from 'src/environments/environment';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  public getCategory(categoryId: string): Observable<Category> {
    return this.http
      .get<{ category: IRawCategory }>(
        `${environment.apiUrl}${ApiPaths.Categories}/${categoryId}`
      )
      .pipe(map((repsonse) => new Category(repsonse.category)));
  }

  public getCategories(): Observable<Array<Category>> {
    return this.http
      .get<{ categories: Array<IRawCategory> }>(
        `${environment.apiUrl}${ApiPaths.Categories}`
      )
      .pipe(
        map((response) =>
          response.categories.map(
            (rawCategory: IRawCategory) => new Category(rawCategory)
          )
        )
      );
  }
}
