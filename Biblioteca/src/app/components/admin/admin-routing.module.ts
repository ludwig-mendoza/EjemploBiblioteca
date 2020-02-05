import { AuthGuard } from './../../shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('../posts/list-posts/list-posts.module').then(
            m => m.ListPostsModule
          )
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./students/student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'loans',
        loadChildren: () =>
          import('./loans/loan/loans.module').then(m => m.LoansModule)
      },
      {
        path: 'reportandstatistics',
        loadChildren: () =>
          import('./reportsandstatistics/reportsandstatistics.module').then(m => m.ReportsandstatisticsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
