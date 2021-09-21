import { IRawAuthor } from 'src/app/interfaces/author.interface';

export class Author {
  public id: string;
  public firstName: string;
  public lastName: string;

  constructor(rawAuthor: IRawAuthor) {
    this.id = rawAuthor.id;
    this.firstName = rawAuthor.first_name;
    this.lastName = rawAuthor.last_name;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
