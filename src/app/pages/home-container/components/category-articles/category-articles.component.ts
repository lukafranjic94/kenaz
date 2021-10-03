import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';
import { Category } from 'src/app/services/category/category.model';
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
  public categoryUrl: Array<string>;
  public dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    const category: Category | undefined = this.categoryService.getCategory(
      this.articles[0].categoryId
    );
    if (!category) {
      throw new Error('Bad category');
    }
    this.categoryUrl = ['categories', category.name.toLowerCase()];
  }
}
