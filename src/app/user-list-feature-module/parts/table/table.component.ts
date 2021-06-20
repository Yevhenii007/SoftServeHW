import { Component, OnDestroy, OnInit} from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { IUsers } from 'src/app/shared/types/users.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  users: Array<IUsers> = [];

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
    console.log(this.users);
    
    this.subscribeUsers();
  }

  getUsers() {
    this.usersService.getUsersService().then((users: Array<IUsers>) => this.users = users)
  }

  subscribeUsers() {
    this.usersService.subject.subscribe({ next: (users) => this.users = users })
  }

  ngOnDestroy(): void {
    this.usersService.subject.unsubscribe();
  }


}
