import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Article } from 'src/app/services/article/article.model';

@Component({
  selector: 'app-article-carousel',
  templateUrl: './article-carousel.component.html',
  styleUrls: ['./article-carousel.component.scss'],
})
export class ArticleCarouselComponent implements OnInit {
  @Input() articles: Array<Article>;
  @Input() displayAmount: number = 1;
  @Input() title: string;
  @ViewChild('slickModal') public slickModal: SlickCarouselComponent;
  public leftArrowUrl: string;
  public rightArrowUrl: string;
  public dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  public slideConfig: any;
  constructor() {}

  ngOnInit(): void {
    if (this.displayAmount === 1) {
      this.leftArrowUrl = 'assets/images/arrow_left_brown.png';
      this.rightArrowUrl = 'assets/images/arrow_right_brown.png';
    } else {
      this.leftArrowUrl = 'assets/images/arrow_left.svg';
      this.rightArrowUrl = 'assets/images/arrow_right.svg';
    }
    this.slideConfig = {
      arrows: false,
      draggable: false,
      slidesToShow: this.displayAmount,
      slidesToScroll: this.displayAmount,
    };
  }

  public next(): void {
    this.slickModal.slickNext();
  }

  public prev(): void {
    this.slickModal.slickPrev();
  }
}
