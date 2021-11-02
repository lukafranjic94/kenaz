import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';
import { Comment } from 'src/app/services/comment/comment.model';
import { User } from 'src/app/services/user/user.model';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss'],
})
export class ArticleContainerComponent {
  public templateData$: Observable<{
    article: Article;
    user: User;
    comments: Array<Comment>;
  }> = this.route.paramMap.pipe(
    switchMap((paramMap) => {
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
    private articleService: ArticleService
  ) {}
}
