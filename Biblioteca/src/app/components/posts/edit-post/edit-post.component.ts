import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostI } from '../../../shared/models/post.interface';
import { PostService } from './../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() post: PostI;

  constructor(private postSvc: PostService) { }

  public editPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name:new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    review: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    cover: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.image = this.post.cover;
    this.imageOriginal = this.post.cover;
    this.initValuesForm();
  }

  editPost(post: PostI) {
    if (this.image === this.imageOriginal) {
      post.cover = this.imageOriginal;
      this.postSvc.editPostById(post);
    } else {
      this.postSvc.editPostById(post, this.image);
    }
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

  private initValuesForm(): void {
    this.editPostForm.patchValue({
      id: this.post.id,
      name: this.post.name,
      author: this.post.author,
      review: this.post.review,
      category: this.post.category
    });
  }

}
