import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  @Input() public articles: Array<Article>;
  @Input() public title: string;
  constructor() {}

  ngOnInit(): void {}
}
