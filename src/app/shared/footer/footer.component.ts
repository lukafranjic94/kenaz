import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public featuredArticles: Array<Article>;
  public randomArticles: Array<Article>;
  constructor(private articleService: ArticleService) {
    this.featuredArticles = this.articleService.getNPopularArticles(3);
    this.randomArticles = this.articleService.getNPopularArticles(3);
  }

  ngOnInit(): void {}
}
