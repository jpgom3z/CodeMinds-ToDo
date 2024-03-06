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
<<<<<<< Updated upstream
import { DeleteSnackbar } from './snackbars/delete/delete/delete.snackbar';
=======
import { CreateModal } from './modals/create/create.modal';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    MainLayout,
    UpdateModal,
    DeleteModal,
<<<<<<< Updated upstream
    DeleteSnackbar
=======
    CreateModal
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule
  ],
})
export class SharedModule { }
