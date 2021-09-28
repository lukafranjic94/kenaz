import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';

@Component({
  selector: 'app-article-slider',
  templateUrl: './article-slider.component.html',
  styleUrls: ['./article-slider.component.scss'],
})
export class ArticleSliderComponent implements OnInit {
  @Input() public articles: Array<Article>;
  public currentArticle: Article;
  public dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  constructor() {}

  ngOnInit(): void {
    this.currentArticle = this.articles[0];
  }

  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];
  slideConfig = {
    prevArrow: '.article-slider-prev',
    nextArrow: '.article-slider-next',
  };
}
