export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  category: string;
  isbn: string;
  length: number;
  published: string;
  description: string;
  coverImage: string;
}

export const books: Book[] = [
  {
    id: "1",
    title: "A Million To One",
    author: "Tony Faggioli",
    price: 6.99,
    originalPrice: 9.99,
    category: "Novels",
    isbn: "978-9-390-16626-8",
    length: 252,
    published: "08 September 2020",
    description: "Detective Napoleon Villa's latest case is spiraling out of control. Drawing on his skills, he battles to save former suspect Kyle Fasano from becoming the next victim. Yet no amount of training or experience could prepare him for the latest twist in the investigation.",
    coverImage: "/api/placeholder/300/450"
  },
  {
    id: "2",
    title: "Tales Under The Purple Sky",
    author: "Various Authors",
    price: 6.99,
    category: "Novels",
    isbn: "978-1-234-56789-0",
    length: 180,
    published: "15 March 2021",
    description: "A collection of enchanting tales that transport readers to magical realms under purple skies.",
    coverImage: "/api/placeholder/300/450"
  },
  {
    id: "3",
    title: "The Garden Of Words",
    author: "Makoto Shinkai",
    price: 6.99,
    category: "Novels",
    isbn: "978-1-234-56789-1",
    length: 256,
    published: "20 June 2020",
    description: "A beautiful story of connection and growth set in a lush garden.",
    coverImage: "/api/placeholder/300/450"
  },
  {
    id: "4",
    title: "Monster",
    author: "Naoki Urasawa",
    price: 6.99,
    category: "Novels",
    isbn: "978-1-234-56789-2",
    length: 420,
    published: "10 January 2019",
    description: "A gripping psychological thriller that explores the nature of evil.",
    coverImage: "/api/placeholder/300/450"
  }
];
