import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public featuredArticles$: Observable<Array<Article>> = this.articleService
    .getMostViewedArticles()
    .pipe(map((articles: Array<Article>) => articles.slice(0, 3)));

  public randomArticles$: Observable<Array<Article>> = this.articleService
    .getTopRatedArticles()
    .pipe(map((articles) => articles.slice(0, 3)));

  constructor(private articleService: ArticleService) {}
}
