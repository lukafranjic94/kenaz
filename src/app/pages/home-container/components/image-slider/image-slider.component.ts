import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ModalImageComponent } from '../modal-image/modal-image.component';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @ViewChild('mainCarousel') public mainCarousel: SlickCarouselComponent;
  @ViewChild('reelCarousel') public reelCarousel: SlickCarouselComponent;
  public currentSlide: number = 0;
  constructor(private dialog: MatDialog) {}

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

  afterChange(e: any): void {
    console.log(e);
    this.currentSlide = e.currentSlide;
  }

  public popUp(): void {
    let smt = this.dialog.open(ModalImageComponent);
    smt.componentInstance.imgUrl = this.slides[this.currentSlide].img;
  }
}
