// import { Component } from '@angular/core';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';

// @Component({
//   selector: 'app-update',
//   templateUrl: './update.modal.html',
//   styleUrl: './update.modal.css'
// })
// export class UpdateModal {

// }

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
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DeleteData } from '@models/DeleteData';

@Component({
  selector: 'app-update',
  templateUrl: './update.modal.html',
})
export class UpdateModal {
  constructor(
    public dialogRef: MatDialogRef<UpdateModal>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}