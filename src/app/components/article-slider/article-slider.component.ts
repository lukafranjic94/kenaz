import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
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
  @ViewChild('slickModal') public slickModal: SlickCarouselComponent;
  constructor() {}

  ngOnInit(): void {
    this.currentArticle = this.articles[0];
  }

  slideConfig = {
    arrows: false,
    draggable: false,
  };

  public next(): void {
    this.slickModal.slickNext();
  }

  public prev(): void {
    this.slickModal.slickPrev();
  }
}
