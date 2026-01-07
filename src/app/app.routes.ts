import { Routes } from '@angular/router';
import { Activity1Component } from './activity/activity-1.component';
import { prelimExamComponent } from './prelim-exam/prelim-exam.component';

export const routes: Routes = [
  {
    path: 'activity-1',
    component: Activity1Component
  },
  {
    path: 'prelim-exam',
    component: prelimExamComponent
  }
];