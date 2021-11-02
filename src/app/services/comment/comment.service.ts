import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRawComment } from 'src/app/interfaces/raw-comment';
import { ApiPaths, environment } from 'src/environments/environment';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  public getCommentsForArticleId(
    articleId: string
  ): Observable<Array<Comment>> {
    return this.http
      .get<{ comments: Array<IRawComment> }>(
        `${environment.apiUrl}${ApiPaths.Comments}/${articleId}`
      )
      .pipe(
        map((response) =>
          response.comments.map(
            (rawComment: IRawComment) => new Comment(rawComment)
          )
        )
      );
  }
}
