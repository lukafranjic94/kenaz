import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRawUser } from 'src/app/interfaces/raw-user.interface';
import { ApiPaths, environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUser(userId: string): Observable<User> {
    return this.http
      .get<{ user: IRawUser }>(
        `${environment.apiUrl}${ApiPaths.Users}/${userId}`
      )
      .pipe(map((response) => new User(response.user)));
  }
}
