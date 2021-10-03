import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public popularArticles: Array<Article> = this.articleService
    .getPopular()
    .slice(0, 5);
  public topRatedArticles: Array<Article> = this.articleService
    .getTopRated()
    .slice(0, 5);
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {}
}
