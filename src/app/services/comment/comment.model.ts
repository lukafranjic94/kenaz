import { IRawComment } from 'src/app/interfaces/raw-comment';

export class Comment {
  public id: string;
  public name: string;
  public body: string;
  public createdAt: Date;
  public articleId: string;
  constructor(rawComment: IRawComment) {
    this.id = rawComment.id;
    this.name = rawComment.name;
    this.body = rawComment.body;
    this.createdAt = new Date(rawComment.created_at);
    this.articleId = rawComment.article_id;
  }
}
