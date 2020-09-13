export class Post {

  id: number;
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(id: number, title: string, content: string, loveIts: number, createdAt: Date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdAt = createdAt;
  }
}
