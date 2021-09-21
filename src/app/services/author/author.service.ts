import { Injectable } from '@angular/core';
import { IRawAuthor } from 'src/app/interfaces/author.interface';
import { Author } from './author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private authors: Array<IRawAuthor> = [
    {
      id: '1',
      first_name: 'Mark',
      last_name: 'Finnegan',
    },
    {
      id: '2',
      first_name: 'John',
      last_name: 'Smith',
    },
  ];
  constructor() {}

  private getAuthors(): Array<Author> {
    return this.authors.map((rawAuthor: IRawAuthor) => new Author(rawAuthor));
  }

  public getAuthor(authorId: string): Author | undefined {
    return this.getAuthors().find((author: Author) => author.id === authorId);
  }
}
