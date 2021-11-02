import { IRawArticle } from 'src/app/interfaces/raw-article.interface';

export class Article {
  public id: string;
  private _title: string;
  public body: string;
  public url: string;
  public views: number;
  public rating: number;
  public createdAt: Date;
  public userId: string;
  public categoryId: string;
  public imgUrl: string;

  constructor(rawArticle: IRawArticle) {
    this._title = rawArticle.title;
    this.id = rawArticle.id;
    this.createdAt = new Date(rawArticle.created_at);
    this.body = rawArticle.body;
    this.url = rawArticle.url;
    this.views = rawArticle.views;
    this.rating = rawArticle.rating;
    this.userId = rawArticle.user_id;
    this.categoryId = rawArticle.category_id;
    this.imgUrl = rawArticle.img_url;
  }

  public get title(): string {
    return this._title
      .split('')
      .map((val: string, index: number) => {
        if (index === 0) {
          return val.toUpperCase();
        }
        return val;
      })
      .join('');
  }
}
