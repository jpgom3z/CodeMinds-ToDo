import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingComponent } from './pending/pending.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  {
    path: '',
    component: PendingComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
