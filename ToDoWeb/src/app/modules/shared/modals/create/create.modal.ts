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
import { CreateData } from '@models/CreateData';

@Component({
  selector: 'app-create',
  templateUrl: './create.modal.html',
})
export class CreateModal {
  constructor(
    public dialogRef: MatDialogRef<CreateModal>,
    @Inject(MAT_DIALOG_DATA) public data: CreateData,
  ) {
    // Ensure that data is initialized if it's null or undefined
    if (!this.data) {
      this.data = { description: '', dueDate: null, stateId: null };
    }
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
    console.log(this.data);
  }
}