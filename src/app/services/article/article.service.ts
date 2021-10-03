import { Injectable } from '@angular/core';
import { IRawArticle } from 'src/app/interfaces/raw-article.interface';
import { Category } from '../category/category.model';
import { CategoryService } from '../category/category.service';
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
      img_url: 'assets/images/sample_image2.jpg',
    },
    {
      id: '2',
      title: 'The Secrets To The Stock Market',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '1',
      created_at: '2021-04-28',
      img_url: 'assets/images/sample_image3.jpg',
    },
    {
      id: '3',
      title: "The Lazy Man's Guide To Cryptocurrency",
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '1',
      created_at: '2021-03-11',
      img_url: 'assets/images/sample_image4.jpg',
    },
    {
      id: '4',
      title: '9 Ways Binance Can Make You Invincible',
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '1',
      created_at: '2021-08-05',
      img_url: 'assets/images/sample_image5.jpg',
    },
    {
      id: '5',
      title: 'The Wonders Of Economics',
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '1',
      created_at: '2021-06-02',
      img_url: 'assets/images/sample_image6.jpg',
    },
    {
      id: '6',
      title: 'How To Win Friends And Influence People with Football',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '2',
      created_at: '2021-04-30',
      img_url: 'assets/images/sample_image7.jpg',
    },
    {
      id: '7',
      title: 'Old School Baseball',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '2',
      created_at: '2021-01-30',
      img_url: 'assets/images/sample_image8.jpg',
    },
    {
      id: '8',
      title: 'How to Play Cricket',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '2',
      created_at: '2021-07-29',
      img_url: 'assets/images/sample_image9.jpg',
    },
    {
      id: '9',
      title: '10 Unforgivable Sins Of Sailing',
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '2',
      created_at: '2021-03-15',
      img_url: 'assets/images/sample_image10.jpg',
    },
    {
      id: '10',
      title: 'The Wonders of Mochi',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '1',
      created_at: '2021-12-11',
      img_url: 'assets/images/sample_image11.jpg',
    },
    {
      id: '11',
      title: 'Old School Baseball',
      body: this.loremIpsum.getDummyText(),
      author_id: '2',
      category_id: '3',
      created_at: '2021-01-30',
      img_url: 'assets/images/sample_image8.jpg',
    },
    {
      id: '12',
      title: 'The Wonders Of Economics',
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '3',
      created_at: '2021-06-02',
      img_url: 'assets/images/sample_image6.jpg',
    },
    {
      id: '4',
      title: '9 Ways Binance Can Make You Invincible',
      body: this.loremIpsum.getDummyText(),
      author_id: '1',
      category_id: '3',
      created_at: '2021-08-05',
      img_url: 'assets/images/sample_image5.jpg',
    },
  ];

  private getArticles(): Array<Article> {
    return this.articles.map(
      (rawArticle: IRawArticle) => new Article(rawArticle)
    );
  }

  public getTopRated(): Array<Article> {
    return this.getArticles().filter(
      (article: Article, index: number) => index % 2 === 0
    );
  }

  public getPopular() {
    return this.getArticles().filter(
      (article: Article, index: number) => index % 2 === 1
    );
  }

  public getArticle(articleId: string): Article | undefined {
    return this.getArticles().find((article) => article.id === articleId);
  }

  public getArticlesForCategoryName(categoryName: string): Array<Article> {
    const category: Category | undefined = this.categoryService
      .getCategories()
      .find(
        (category: Category) =>
          category.name.toLowerCase() === categoryName.toLowerCase()
      );
    if (category) {
      return this.getArticles().filter(
        (article: Article) => article.categoryId === category.id
      );
    } else {
      return [];
    }
  }

  public getArticlesForCategoryId(categoryId: string): Array<Article> {
    return this.getArticles().filter(
      (article: Article) => article.categoryId === categoryId
    );
  }

  public getNPopularArticles(number: number): Array<Article> {
    return this.getArticles().slice(0, number);
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

  constructor(
    private loremIpsum: LoremIpsumService,
    private categoryService: CategoryService
  ) {}
}
