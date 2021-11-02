import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';

interface ITemplateData {
  readonly sportArticles: Array<Article>;
  readonly newsArticles: Array<Article>;
  readonly businessArticles: Array<Article>;
  readonly newsCarousel: Array<Article>;
  readonly editorialArticles: Array<Article>;
  readonly localNewsArticles: Array<Article>;
}

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
  private sportArticles$: Observable<Array<Article>> = this.articleService
    .getArticlesForCategoryName('sport')
    .pipe(map((articles: Array<Article>) => articles.slice(0, 3)));
  private newsArticles$: Observable<Array<Article>> = this.articleService
    .getLatestArticles()
    .pipe(map((articles: Array<Article>) => articles.slice(0, 3)));
  private businessArticles$: Observable<Array<Article>> = this.articleService
    .getArticlesForCategoryName('business')
    .pipe(map((articles: Array<Article>) => articles.slice(0, 4)));
  private newsCarousel$: Observable<Array<Article>> = this.articleService
    .getMostViewedArticles()
    .pipe(map((articles: Array<Article>) => articles.slice(0, 4)));
  private editorialArticles$: Observable<Array<Article>> = this.articleService
    .getMostViewedArticles()
    .pipe(map((articles: Array<Article>) => articles.slice(0, 4)));
  private localNewsArticles$: Observable<Array<Article>> = this.articleService
    .getMostViewedArticles()
    .pipe(map((articles: Array<Article>) => articles.slice(0, 4)));
  public templateData$: Observable<ITemplateData>;
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.templateData$ = combineLatest([
      this.sportArticles$,
      this.newsArticles$,
      this.businessArticles$,
      this.newsCarousel$,
      this.editorialArticles$,
      this.localNewsArticles$,
    ]).pipe(
      map(
        ([
          sportArticles,
          newsArticles,
          businessArticles,
          newsCarousel,
          editorialArticles,
          localNewsArticles,
        ]) => {
          return {
            sportArticles,
            newsArticles,
            businessArticles,
            newsCarousel,
            editorialArticles,
            localNewsArticles,
          };
        }
      )
    );
  }
}
