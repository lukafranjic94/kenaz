import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map, mergeAll, switchMap, toArray } from 'rxjs/operators';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';
import { User } from 'src/app/services/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
})
export class CategoryContainerComponent {
  public categoryName: string = 'mujo';
  public dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  public templateData$: Observable<Array<{ article: Article; user: User }>> =
    this.route.paramMap.pipe(
      switchMap((val) => {
        const categoryName: string | null = val.get('name');
        if (!categoryName) {
          throw new Error('Something went wrong!');
        }
        this.categoryName = categoryName;
        if (categoryName.toLowerCase() === 'news') {
          return this.articleService.getLatestArticlesWithUser();
        }
        return this.articleService.getArticlesWithUserForCategoryName(
          categoryName
        );
      })
    );

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  public getArticlesFromTemplateData(
    templateData: Array<{ article: Article; user: User }>
  ): Array<Article> {
    return templateData.map((data) => data.article);
  }
}
