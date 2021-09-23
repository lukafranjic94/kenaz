import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
})
export class CategoryContainerComponent implements OnInit {
  public articles: Array<Article>;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const categoryName: string | null = params.get('name');
      if (categoryName) {
        this.articles =
          this.articleService.getArticlesForCategoryName(categoryName);
      }
    });
  }
}
