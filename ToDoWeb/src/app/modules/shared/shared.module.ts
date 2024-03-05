import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayout } from './layouts/main/main.layout';
import { UpdateModal } from './modals/update/update.modal';
import { DeleteModal } from './modals/delete/delete.modal';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    MainLayout,
    UpdateModal,
    DeleteModal
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule
  ],
})
export class SharedModule { }
