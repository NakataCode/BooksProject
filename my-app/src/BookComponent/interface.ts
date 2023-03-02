export interface Book {
  id: number;
  source: string;
  title: string;
  author: string;
  shortDesctiption: string;
  pages: number;
  isOwned: boolean;
  totalPages: number;
  pagesRead: number;
}
