import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLike: number;
  @Input() postDate: Date;
  @Input() index: string;
  @Input() id: number;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onLikeIt(): void {
    this.postService.likeIt(this.index);
  }

  onDontLikeIt(): void {
    this.postService.dontLikeIt(this.index);
  }

  onGetColor(): string {
    if (this.postLike >= 0 ) {
        return 'green';
      } else {
        return 'red';
      }
    }

  onDelete(id: number): void {
    this.postService.deleteOnepost(id);
  }

}
