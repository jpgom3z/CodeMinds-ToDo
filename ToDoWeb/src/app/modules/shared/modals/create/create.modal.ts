import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateUpdateData } from '@models/modal';

@Component({
  selector: 'app-create',
  templateUrl: './create.modal.html',
  styleUrl: 'create.modal.css'
})
export class CreateModal {
  constructor(
    public dialogRef: MatDialogRef<CreateModal>,
    @Inject(MAT_DIALOG_DATA) public data: CreateUpdateData,
  ) {
    if (!this.data) {
      this.data = { description: '', dueDate: null, stateId: null };
    }
  }

  onNoClick(): void {
    // console.log(this.data);
  }
}