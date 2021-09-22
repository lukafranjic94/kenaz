import { Injectable } from '@angular/core';
import { IRawArticle } from 'src/app/interfaces/raw-article.interface';
import { LoremIpsumService } from '../lorem-ipsum/lorem-ipsum.service';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Array<IRawArticle> = [
    {
      id: '1',
      title: 'What Everyone Must Know About Basketball',
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '2',
      created_at: '2021-05-25',
    },
    {
      id: '2',
      title: 'The Secrets To The Stock Market',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '1',
      created_at: '2021-04-28',
    },
    {
      id: '3',
      title: "The Lazy Man's Guide To Cryptocurrency",
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '1',
      created_at: '2021-03-11',
    },
    {
      id: '4',
      title: '9 Ways Binance Can Make You Invincible',
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '1',
      created_at: '2021-08-05',
    },
    {
      id: '5',
      title: 'The Wonders Of Economics',
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '1',
      created_at: '2021-06-02',
    },
    {
      id: '6',
      title: 'How To Win Friends And Influence People with Football',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '2',
      created_at: '2021-04-30',
    },
    {
      id: '7',
      title: 'Old School Baseball',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '2',
      created_at: '2021-01-30',
    },
    {
      id: '8',
      title: 'How to Play Cricket',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '2',
      created_at: '2021-07-29',
    },
    {
      id: '9',
      title: '10 Unforgivable Sins Of Sailing',
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '2',
      created_at: '2021-03-15',
    },
  ];

  private getArticles(): Array<Article> {
    return this.articles.map(
      (rawArticle: IRawArticle) => new Article(rawArticle)
    );
  }

  public getArticlesForCategoryId(categoryId: string): Array<Article> {
    return this.getArticles().filter(
      (article: Article) => article.categoryId === categoryId
    );
  }

  public getNArticlesForCategoryId(
    categoryId: string,
    number: number
  ): Array<Article> {
    return this.getArticles()
      .filter((article) => article.categoryId === categoryId)
      .slice(0, number);
  }

  public getArticlesForAuthorId(authorId: string): Array<Article> {
    return this.getArticles().filter(
      (article: Article) => article.authorId === authorId
    );
  }

  constructor(private loremIpsum: LoremIpsumService) {}
}
