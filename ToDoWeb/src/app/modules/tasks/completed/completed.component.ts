import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChoreData, Chore } from '@models/chore';
import { ChoreService } from '@services/chore/chore.service';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { UpdateModal } from '@shared/modals/update/update.modal';
import { DeleteData } from '@models/modal';
import { DeleteModal } from '@shared/modals/delete/delete.modal';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { CreateUpdateData } from '@models/modal';
import { CreateModal } from '@shared/modals/create/create.modal';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent {
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

  public openUpdateDialog(entity: Chore) {
    const chore = entity;
    const dialogRef = this.dialog.open(UpdateModal, {
      height: '400px',
      width: '600px',
      data : {
        id: chore.id,
        description: chore.description,
        dueDate: chore.dueDate.split('T')[0],
        stateId: chore.state.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(result);
        this.choreService.update(result, result.id).subscribe((response: ChoreData) => {
          console.log(response.messages);
        this.ngOnInit();
        this.openSnackBar('Task has been modified!', 'Dismiss');
        })
      }
    });
  }

  public openDeleteDialog(id: number) {
    const choreId = id;
    const dialogRef = this.dialog.open(DeleteModal);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log();
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

  public openSnackBar(message: string, actionText: string) {
    this.snackBar.open(message, actionText, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000
    })
  }

  public ngOnInit(): void {
    this.choreService.list(2).subscribe((response: ChoreData) => {
      this.chores = response.data;
    });
  }
}
