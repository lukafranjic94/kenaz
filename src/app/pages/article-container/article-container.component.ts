import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/services/article/article.model';
import { ArticleService } from 'src/app/services/article/article.service';
import { Comment } from 'src/app/services/comment/comment.model';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss'],
})
export class ArticleContainerComponent implements OnInit {
  public article: Article | undefined;
  public comments: Array<Comment>;
  public dateOptions: Intl.DateTimeFormatOptions;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentService
  ) {
    this.dateOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id: string | null = paramMap.get('id');
      if (id) {
        this.article = this.articleService.getArticle(id);
        this.comments = this.commentService.getCommentsForArticleId(id);
      }
    });
  }
}
