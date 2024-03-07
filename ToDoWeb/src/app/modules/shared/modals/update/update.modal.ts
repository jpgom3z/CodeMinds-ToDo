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
import { UpdateData } from '@models/modal';

@Component({
  selector: 'app-update',
  templateUrl: './update.modal.html',
})
export class UpdateModal {
  constructor(
    public dialogRef: MatDialogRef<UpdateModal>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateData,
  ) {
    if (!this.data) {
      this.data = {id: null, description: '', dueDate: null, stateId: null };
    }
  }

  onNoClick(): void {
    console.log(this.data);
  }
}
