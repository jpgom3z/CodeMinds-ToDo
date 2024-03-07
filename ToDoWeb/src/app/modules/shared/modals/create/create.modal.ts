import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
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
  }
}