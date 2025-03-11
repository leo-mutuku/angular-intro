import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation!:string;
  Username!:string;
  NoOfTeamMembers!:number;
  PendingTasks!:number
  UpComingProjects!: number;
  ProjectCost!:number
  CurrentExenditure!:number;
  AvailableFunds!:number;

  ngOnInit()
  {
    this.Designation = "Team Leader";
    this.Username = "Leonard Mutuku";
    this.NoOfTeamMembers=67;
    this.PendingTasks = 10;
     this.UpComingProjects = 5;
     this.ProjectCost = 500000;
     this.CurrentExenditure = 120000;
     this.AvailableFunds = 380000;
  }

}
