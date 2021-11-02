import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';
import { CategoryService } from 'src/app/services/category/category.service';

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
  @Input() header: string = 'link';
  @Input() categoryName: string = 'business';
  public categoryUrl: Array<string>;
  public dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  constructor() {}

  ngOnInit(): void {
    this.categoryUrl = ['categories', this.categoryName.toLowerCase()];
  }
}
