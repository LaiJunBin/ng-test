import { Expose } from 'class-transformer';

export class Book {
  @Expose({ name: 'ID' })
  id: number;

  @Expose({ name: 'Title' })
  title: string;
  description: string;
  pageCount: number;
  excerpt: string;
  publishDate: string;
}
