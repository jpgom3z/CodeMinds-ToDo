import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chore, ChoreData } from '@models/chore';
import { ChoreService } from '@services/chore/chore.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent {
  public response: ChoreData;
  public chores: Chore[];

  constructor(
    private choreService: ChoreService,
    private router: Router
  ){
    this.chores = [];
  }

  public ngOnInit(): void {
    this.choreService.list(2).subscribe((response: ChoreData) => {
      this.chores = response.data;
    });
  }
}
