import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required ],
      content: ['', Validators.required ],
    });
  }

  onSavePost(): void {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    this.postService.addPost(title, content);
    this.router.navigate(['/posts']);
  }

}



