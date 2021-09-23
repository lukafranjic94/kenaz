import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public popularArticles: Array<Article>;
  constructor(private articleService: ArticleService) {
    this.popularArticles = this.articleService.getNPopularArticles(5);
  }

  ngOnInit(): void {}
}
