export interface Book {
  title: string;
  describe: string;
  author: string;
  image: string;
  id: string;
}

export interface BookDescription {
  title: string;
  describe: string | undefined;
  author: string;
  image: string;
  pageCount: string;
  publishedDate: string;
  categories: string;
}
