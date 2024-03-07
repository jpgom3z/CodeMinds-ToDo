import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
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
  }
}
