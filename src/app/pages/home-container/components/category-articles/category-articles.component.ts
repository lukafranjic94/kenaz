import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';

@Component({
  selector: 'app-category-articles',
  templateUrl: './category-articles.component.html',
  styleUrls: ['./category-articles.component.scss'],
})
export class CategoryArticlesComponent implements OnInit {
  @Input() articles: Array<Article>;
  @Input() color: string;
  @Input() title: string;
  @Input() type: string = 'vertical';
  constructor() {}

  ngOnInit(): void {}
}
