import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IRawArticle } from 'src/app/interfaces/raw-article.interface';
import { ApiPaths, environment } from 'src/environments/environment';
import { Comment } from '../comment/comment.model';
import { CommentService } from '../comment/comment.service';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private commentService: CommentService
  ) {}

  public getArticle(articleUrl: string): Observable<Article> {
    return this.http
      .get<{ article: IRawArticle }>(
        `${environment.apiUrl}${ApiPaths.Articles}/url/${articleUrl}`
      )
      .pipe(map((response) => new Article(response.article)));
  }

  public getArticleWithCommentUser(articleUrl: string) {
    return this.http
      .get<{ article: IRawArticle }>(
        `${environment.apiUrl}${ApiPaths.Articles}/url/${articleUrl}`
      )
      .pipe(
        map((response) => new Article(response.article)),
        switchMap((article) =>
          combineLatest([
            this.userService.getUser(article.userId),
            this.commentService.getCommentsForArticleId(article.id),
          ]).pipe(
            map(([user, comments]: [User, Array<Comment>]) => {
              return {
                article,
                user,
                comments,
              };
            })
          )
        )
      );
  }

  public getMostViewedArticles(): Observable<Array<Article>> {
    return this.http
      .get<{ articles: Array<IRawArticle> }>(
        `${environment.apiUrl}${ApiPaths.Articles}/most-viewed`
      )
      .pipe(
        map((response) =>
          response.articles.map(
            (rawArticle: IRawArticle) => new Article(rawArticle)
          )
        )
      );
  }

  public getLatestArticles(): Observable<Array<Article>> {
    return this.http
      .get<{ articles: Array<IRawArticle> }>(
        `${environment.apiUrl}${ApiPaths.Articles}/latest`
      )
      .pipe(
        map((response) =>
          response.articles.map(
            (rawArticle: IRawArticle) => new Article(rawArticle)
          )
        )
      );
  }

  public getTopRatedArticles(): Observable<Array<Article>> {
    return this.http
      .get<{ articles: Array<IRawArticle> }>(
        `${environment.apiUrl}${ApiPaths.Articles}/top-rated`
      )
      .pipe(
        map((response) =>
          response.articles.map(
            (rawArticle: IRawArticle) => new Article(rawArticle)
          )
        )
      );
  }

  public getArticlesForCategoryName(
    categoryName: string
  ): Observable<Array<Article>> {
    return this.http
      .get<{ articles: Array<IRawArticle> }>(
        `${environment.apiUrl}${ApiPaths.Articles}/category/${categoryName}`
      )
      .pipe(
        map((response) =>
          response.articles.map(
            (rawArticle: IRawArticle) => new Article(rawArticle)
          )
        )
      );
  }

  public getLatestArticlesWithUser(): Observable<
    Array<{ article: Article; user: User }>
  > {
    return this.http
      .get<{ articles: Array<IRawArticle> }>(
        `${environment.apiUrl}${ApiPaths.Articles}/latest`
      )
      .pipe(
        map((response) =>
          response.articles.map(
            (rawArticle: IRawArticle) => new Article(rawArticle)
          )
        ),
        switchMap((articles: Array<Article>) =>
          forkJoin(
            articles.map((article: Article) =>
              this.userService.getUser(article.userId).pipe(
                map((user: User) => {
                  return { article, user };
                })
              )
            )
          )
        )
      );
  }

  public getArticlesWithUserForCategoryName(
    categoryName: string
  ): Observable<Array<{ article: Article; user: User }>> {
    return this.http
      .get<{ articles: Array<IRawArticle> }>(
        `${environment.apiUrl}${ApiPaths.Articles}/category/${categoryName}`
      )
      .pipe(
        map((response) =>
          response.articles.map(
            (rawArticle: IRawArticle) => new Article(rawArticle)
          )
        ),
        switchMap((articles: Array<Article>) =>
          forkJoin(
            articles.map((article: Article) =>
              this.userService.getUser(article.userId).pipe(
                map((user: User) => {
                  return { article, user };
                })
              )
            )
          )
        )
      );
  }
}
