import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { PendingComponent } from './pending/pending.component';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  declarations: [
    PendingComponent,
    CompletedComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
