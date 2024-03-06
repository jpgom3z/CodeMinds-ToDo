import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { PendingComponent } from './pending/pending.component';
import { CompletedComponent } from './completed/completed.component';
import { SharedModule } from '@shared/shared.module';
import { UpdateModal } from '@shared/modals/update/update.modal';
import { DeleteModal } from '@shared/modals/delete/delete.modal';



@NgModule({
  declarations: [
    PendingComponent,
    CompletedComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
