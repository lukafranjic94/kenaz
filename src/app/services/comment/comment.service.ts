import { Injectable } from '@angular/core';
import { IRawComment } from 'src/app/interfaces/comment.interface';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private rawComments: Array<IRawComment> = [
    {
      id: '1',
      name: 'Janko Petrović',
      email: 'janko@gmail.com',
      body: 'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.',
      created_at: '2021-04-04',
      article_id: '1',
    },
    {
      id: '2',
      name: 'Marko Tenak',
      email: 'marko@gmail.com',
      body: 'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.',
      created_at: '2021-04-04',
      article_id: '1',
    },
    {
      id: '3',
      name: 'Ivan Jantol',
      email: 'jantol@gmail.com',
      body: 'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.',
      created_at: '2021-04-04',
      article_id: '1',
    },
    {
      id: '4',
      name: 'Ivana Kovač',
      email: 'ivana@gmail.com',
      body: 'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.',
      created_at: '2021-04-04',
      article_id: '1',
    },
  ];

  constructor() {}

  public get comments(): Array<Comment> {
    return this.rawComments.map(
      (rawComment: IRawComment) => new Comment(rawComment)
    );
  }

  public getCommentsForArticleId(articleId: string): Array<Comment> {
    return this.comments.filter(
      (comment: Comment) => comment.articleId === articleId
    );
  }
}
