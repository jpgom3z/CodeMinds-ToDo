import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse, Chore } from '@models/chore';
import { ChoreService } from '@services/chore/chore.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.css'
})
export class PendingComponent {
  public response: ApiResponse;
  public chores: Chore[];

  constructor(
    private choreService: ChoreService,
    private router: Router
  ){
    this.chores = [];
  }

  public ngOnInit(): void {
    this.choreService.list(1).subscribe((response: ApiResponse) => {
      this.chores = response.data;
    });
  }
}

