import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  public isAdmin: boolean;
  public isCustomer: boolean;

  constructor(authService: AuthService) {
      if (authService.user) {
          this.isAdmin = authService.user.group === 'admin';
          this.isCustomer = authService.user.group === 'customer';
      }
  }
  ngOnInit() {
  }
  displayedColumns: string[] = ['date', 'TodoID', 'Desc', 'status'];
  myDataSource: TodoElement[] = [
      { date: '04/10/2019', todoID: 325684, desc: 'Send to approval', status: 'Approved' },
      { date: '04/15/2019', todoID: 897956, desc: 'Add new customer', status: 'Pending Approval' },
      { date: '04/18/2019', todoID: 326598, desc: 'SEnd invoices', status: 'Not Submitted' }
  ];

}


export interface TodoElement {
    date: string;
    todoID: number;
    desc: string;
    status: string;
}
