import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostI } from '../../../shared/models/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  private image: any;
  constructor(private postSvc: PostService) { }

  public newPostForm = new FormGroup({
    code: new FormControl('', Validators.required),
    isbn: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    review: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    suggestion: new FormControl(false, Validators.required),
    amount: new FormControl('', Validators.required),
    available: new FormControl('', Validators.required),
    cover: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

  addNewPost(data: PostI) {
    console.log('New post', data);
    this.postSvc.preAddAndUpdatePost(data, this.image);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }
}
