import { Component } from '@angular/core';
import { combineLatest, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';

interface ITemplateData {
  readonly popularArticles: Array<Article>;
  readonly topRatedArticles: Array<Article>;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public templateData$: Observable<ITemplateData> = combineLatest([
    this.articleService
      .getMostViewedArticles()
      .pipe(map((articles: Array<Article>) => articles.slice(0, 5))),
    this.articleService
      .getTopRatedArticles()
      .pipe(map((articles: Array<Article>) => articles.slice(0, 5))),
  ]).pipe(
    map(([mostViewed, topRated]: [Array<Article>, Array<Article>]) => {
      return {
        topRatedArticles: topRated,
        popularArticles: mostViewed,
      };
    })
  );
  constructor(private articleService: ArticleService) {}
}
