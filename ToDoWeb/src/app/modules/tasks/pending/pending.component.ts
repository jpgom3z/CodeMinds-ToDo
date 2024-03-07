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

  public openCreateDialog(){
    const dialogRef = this.dialog.open(CreateModal, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      console.log(result);
      this.choreService.create(result).subscribe((response: ChoreData) => {
        console.log(response.messages);
      this.ngOnInit();
      this.openSnackBar('New task has been created!', 'Dismiss');
      })
    }
    });
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

  public pendingExpired(date: string){

    const dueDateMS = new Date(date).getTime();
    let currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    let currentDateMS = currentDate.getTime();
    
    if(dueDateMS < currentDateMS){
      return 'expired-date'
    }else if (dueDateMS == currentDateMS){
      return 'almost-expired-date'
    }else {
      return 'valid-date'
    }
  }

  public ngOnInit(): void {
    this.choreService.list(1).subscribe((response: ChoreData) => {
      this.chores = response.data;
    });
  }
}

