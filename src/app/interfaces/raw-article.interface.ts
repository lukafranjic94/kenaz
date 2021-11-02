export interface IRawArticle {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly url: string;
  readonly views: number;
  readonly rating: number;
  readonly created_at: string;
  readonly updated_at: string;
  readonly published_at: string;
  readonly user_id: string;
  readonly category_id: string;
  readonly img_url: string;
}
