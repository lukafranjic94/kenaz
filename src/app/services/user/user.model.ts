import { IRawUser } from 'src/app/interfaces/raw-user.interface';

export class User {
  public id: string;
  public firstName: string;
  public lastName: string;

  constructor(rawUser: IRawUser) {
    this.id = rawUser.id;
    this.firstName = rawUser.first_name;
    this.lastName = rawUser.last_name;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
