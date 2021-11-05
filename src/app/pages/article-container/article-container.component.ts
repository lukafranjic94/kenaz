import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';
import { Comment } from 'src/app/services/comment/comment.model';
import { CommentService } from 'src/app/services/comment/comment.service';
import { User } from 'src/app/services/user/user.model';
import { ICommentFormData } from './components/comment-form/comment-form.component';

export interface ICommentData {
  commentFormData: ICommentFormData;
  articleId: string;
}

interface ITemplateData {
  article: Article;
  user: User;
  comments: Array<Comment>;
}

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss'],
})
export class ArticleContainerComponent {
  private fetchTrigger$: BehaviorSubject<void> = new BehaviorSubject<void>(
    undefined
  );
  public templateData$: Observable<ITemplateData> = combineLatest([
    this.route.paramMap,
    this.fetchTrigger$,
  ]).pipe(
    switchMap(([paramMap]: [ParamMap, void]) => {
      const articleUrl: string | null = paramMap.get('article_url');
      if (!articleUrl) {
        throw new Error('something went wrong');
      }
      return this.articleService.getArticleWithCommentUser(articleUrl);
    })
  );
  public dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentService
  ) {}

  public onAddComment(commentData: ICommentData) {
    this.commentService
      .addComment(commentData)
      .subscribe(() => this.fetchTrigger$.next());
  }
}
