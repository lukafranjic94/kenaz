import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/services/article/article.model';

@Component({
  selector: 'app-sidebar-articles',
  templateUrl: './sidebar-articles.component.html',
  styleUrls: ['./sidebar-articles.component.scss'],
})
export class SidebarArticlesComponent implements OnInit {
  @Input() articles: Array<Article>;
  constructor() {}

  ngOnInit(): void {}
}
