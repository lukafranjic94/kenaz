import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRawComment } from 'src/app/interfaces/raw-comment';
import { ICommentData } from 'src/app/pages/article-container/article-container.component';
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

  public addComment(commentData: ICommentData): Observable<Comment> {
    return this.http
      .post<{ comment: IRawComment }>(
        `${environment.apiUrl}${ApiPaths.Comments}`,
        {
          comment: {
            name: commentData.commentFormData.name,
            email: commentData.commentFormData.email,
            body: commentData.commentFormData.body,
            article_id: commentData.articleId,
          },
        }
      )
      .pipe(map((response) => new Comment(response.comment)));
  }
}
