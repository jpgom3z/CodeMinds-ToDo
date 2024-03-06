import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChoreData, Chore } from '@models/chore';
import { ChoreService } from '@services/chore/chore.service';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { UpdateModal } from '@shared/modals/update/update.modal';
import { DeleteData } from '@models/DeleteData';
import { DeleteModal } from '@shared/modals/delete/delete.modal';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.css'
})
export class PendingComponent {
  public response: ChoreData;
  public chores: Chore[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'

  constructor(
    private choreService: ChoreService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ){
    this.chores = [];
  }


  public openDeleteDialog(id: number) {
    const choreId = id;
    const dialogRef = this.dialog.open(DeleteModal);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('A chore will be deleted')
        this.choreService.delete(choreId).subscribe((response: ChoreData) => {
          console.log(response.messages);
          this.ngOnInit();
          this.openSnackBar('A task has been deleted', 'Dismiss');
        });
      }
      console.log(`Dialog result: ${result}`);
    })
  }

  public openUpdateDialog(id: number) {
    const choreId = id;
    console.log(choreId);
    const dialogRef = this.dialog.open(UpdateModal, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log(choreId);
    })
  }

  public openSnackBar(message: string, actionText: string) {
    this.snackBar.open(message, actionText, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    })
  }

  public ngOnInit(): void {
    this.choreService.list(1).subscribe((response: ChoreData) => {
      this.chores = response.data;
    });
  }
}

