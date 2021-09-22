import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
  public sportArticles: Array<Article>;
  public newsArticles: Array<Article>;
  constructor(private articleService: ArticleService) {
    this.sportArticles = this.articleService.getNArticlesForCategoryId('2', 3);
    this.newsArticles = this.articleService.getNArticlesForCategoryId('1', 3);
  }

  ngOnInit(): void {}
}
