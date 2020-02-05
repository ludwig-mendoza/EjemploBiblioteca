import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentI } from '../../../../shared/models/student.interface';
import { StudentService } from './../../students/student/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  @Input() post: StudentI;

  constructor(private postSvc: StudentService) { }

  public editPostForm = new FormGroup({
    id_student: new FormControl('', Validators.required),
    name:new FormControl('', Validators.required),
    lastname_p: new FormControl('', Validators.required),
    lastname_m: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.initValuesForm();
  }

  editPost(post: StudentI) {
      this.postSvc.editPostById(post);
  }

  private initValuesForm(): void {
    this.editPostForm.patchValue({
      id: this.post.id,
      id_student: this.post.id_student,
      name: this.post.name,
      lastname_p: this.post.lastname_p,
      lastname_m: this.post.lastname_m,
      grade: this.post.grade,
      group: this.post.group
    });
  }

}
