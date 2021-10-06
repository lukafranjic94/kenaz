import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
})
export class ModalImageComponent implements OnInit {
  @Input() imgUrl: string = 'assets/images/sample_image10.jpg';
  constructor() {}

  ngOnInit(): void {}
}
