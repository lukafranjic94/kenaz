import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';
import { Author } from 'src/app/services/author/author.model';
import { AuthorService } from 'src/app/services/author/author.service';

interface ITemplateData {
  article: Article;
  author: Author;
}

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
})
export class CategoryContainerComponent implements OnInit {
  public templateData: Array<ITemplateData>;
  public articles: Array<Article>;
  public dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const categoryName: string | null = params.get('name');
      if (!categoryName) {
        throw new Error('category not found');
      }
      this.templateData = this.articleService
        .getArticlesForCategoryName(categoryName)
        .map((article: Article) => {
          let author = this.authorService.getAuthor(article.authorId);
          if (!author) {
            throw new Error('no author');
          }
          return {
            article,
            author,
          };
        });
      this.articles = this.templateData.map(
        (templateData: ITemplateData) => templateData.article
      );
    });
  }
}
