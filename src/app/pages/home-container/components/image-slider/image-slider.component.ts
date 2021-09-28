import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
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
  slideConfig = {
    prevArrow: '.prev',
    nextArrow: '.next',
    slidesToScroll: 1,
    asNavFor: '.second-carousel',
  };
  navConfig = {
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    asNavFor: '.first-carousel',
  };
}
