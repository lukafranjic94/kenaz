import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';

@Component({
  selector: 'app-sidebar-articles',
  templateUrl: './sidebar-articles.component.html',
  styleUrls: ['./sidebar-articles.component.scss'],
})
export class SidebarArticlesComponent implements OnInit {
  @Input() articles: Array<Article>;
  public dateOptions: Intl.DateTimeFormatOptions;
  constructor() {
    this.dateOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
  }

  ngOnInit(): void {}
}
