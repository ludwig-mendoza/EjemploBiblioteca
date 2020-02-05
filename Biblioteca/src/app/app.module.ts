import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Paginas */
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

/* Materialize */
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';




/* Firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

/* Libros */
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { EditPostModule } from './components/posts/edit-post/edit-post.module';
import { DetailsPostComponent } from './components/posts/details-post/details-post.component';

/* Alumnos */
import { EditStudentComponent } from './components/admin/students/edit-student/edit-student.component';
import { NewStudentComponent } from './components/admin/students/new-student/new-student.component';
import {NewStudentModule} from './components/admin/students/new-student/new-student.module'
import {EditStudentModule} from './components/admin/students/edit-student/edit-student.module'
import { ModalAlumnosComponent } from './shared/components/modal-alumnos/modal-alumnos.component';
import { ModalPrestamosComponent } from './shared/components/modal-prestamos/modal-prestamos.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    EditPostComponent,
    DetailsPostComponent,
    EditStudentComponent,
    NewStudentComponent,
    ModalAlumnosComponent,
    ModalPrestamosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NewPostModule,
    MaterialModule,
    ReactiveFormsModule,
    EditPostModule,
    MatStepperModule,
    NewStudentModule,
    EditStudentModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  entryComponents: [ModalComponent, ModalAlumnosComponent, ModalPrestamosComponent],
  providers: [
    { provide: StorageBucket, useValue: 'gs://books-d4ab4.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
