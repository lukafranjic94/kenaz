import { IRawArticle } from 'src/app/interfaces/raw-article.interface';

export class Article {
  public id: string;
  public title: string;
  public body: string;
  public createdAt: Date;
  public authorId: string;
  public categoryId: string;

  constructor(rawArticle: IRawArticle) {
    this.title = rawArticle.title;
    this.id = rawArticle.id;
    this.createdAt = new Date(rawArticle.created_at);
    this.body = rawArticle.body;
    this.authorId = rawArticle.author_id;
    this.categoryId = rawArticle.category_id;
  }
}
