import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @ViewChild('mainCarousel') public mainCarousel: SlickCarouselComponent;
  @ViewChild('reelCarousel') public reelCarousel: SlickCarouselComponent;
  constructor() {}

  ngOnInit(): void {}
  slides = [
    { img: 'assets/images/sample_image2.jpg' },
    { img: 'assets/images/sample_image3.jpg' },
    { img: 'assets/images/sample_image4.jpg' },
    { img: 'assets/images/sample_image5.jpg' },
    { img: 'assets/images/sample_image6.jpg' },
    { img: 'assets/images/sample_image7.jpg' },
    { img: 'assets/images/sample_image8.jpg' },
    { img: 'assets/images/sample_image9.jpg' },
    { img: 'assets/images/sample_image10.jpg' },
  ];
  public slideConfig = {
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
  };
  public navConfig = {
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.first-carousel',
    focusOnSelect: true,
    centerMode: true,
    draggable: false,
  };

  public next(): void {
    this.mainCarousel.slickNext();
    this.reelCarousel.slickNext();
  }

  public prev(): void {
    this.mainCarousel.slickPrev();
    this.reelCarousel.slickPrev();
  }
}
