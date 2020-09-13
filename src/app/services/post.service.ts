import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
    {
    id: 0,
    title: 'Premier post',
    content: 'Sur ce blog on parle de tout et de rien',
    loveIts: 0,
    createdAt: new Date()
  },
  {
    id: 1,
    title: 'Deuxième post',
    content: 'BlaBlaBlaBlavBlaBlaBla',
    loveIts: 5,
    createdAt: new Date()
  },
  {
    id: 2,
    title: 'Encore un post',
    content: 'Oh lalala si tu savais....',
    loveIts: 0,
    createdAt: new Date()
  }
  ];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPostsSubject(): void {
    this.postsSubject.next(this.posts);
  }

  addPost(title: string, content: string): void {
    const postObject = new Post(
      this.posts[(this.posts.length - 1)].id + 1,
      title,
      content,
      0,
      new Date()
    );
    this.posts.push(postObject);
    this.emitPostsSubject();
  }


  deleteOnepost(id: number) {
    console.log(id);
    this.posts.splice( id, 1 );
    this.emitPostsSubject();
  }

  likeIt(i: string): void {
    this.posts[i].loveIts += 1;
    this.emitPostsSubject();
  }

  dontLikeIt(i: string): void {
    this.posts[i].loveIts -= 1;
    this.emitPostsSubject();
  }

}
