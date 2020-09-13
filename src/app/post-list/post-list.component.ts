import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: []) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostsSubject();
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

}
